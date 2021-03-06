require("dotenv").config()
var paymentctrl = module.exports
const classmd = require("../models/classmd")
const accountmd = require("../models/accountmd")
const paypal = require('paypal-rest-sdk')
const payoutsSdk = require('@paypal/payouts-sdk')
const payPalClient = require('./payPalClient')
const moment = require("moment")

paypal.configure({
  'mode': 'sandbox',
  'client_id': process.env.CLIENTID_PAYPAL,
  'client_secret': process.env.CLIENTSECRET_PAYPAL
});

var total = 0
var id_user = ""
var id_class = ""
var id_type_user = ""

paymentctrl.pay = async (req,res)=>{
  const jsonstr = await classmd.getClassById_Data(req.body.id_class);
  id_user = req.body.id_user
  id_class = req.body.id_class
  id_type_user = req.body.id_type_user

  console.log(id_user, id_class, id_type_user)

  const json = JSON.parse(jsonstr)
  if(json.success)
  {
    total = json.data.price_class
    const items = {
      "name": json.data.name_class,
      "sku": json.data.id_class,
      "price": json.data.price_class,
      "currency": "USD",
      "quantity": 1
    }

    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:5000/payment/success",
          "cancel_url": "http://localhost:3000/payment-cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [items]
          },
          "amount": {
              "currency": "USD",
              "total": total.toString()
          },
          "description": "Hat for the best team ever"
      }]
    }

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) 
      {
        console.log("Error 1: " + error)
        res.json({success: false, data: err})
      } 
      else 
      {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.json({success: true, data: payment.links[i].href})
          }
        }
      }
    })
  }
  else
  {
    res.json(json)
  }
}

paymentctrl.successPay = async (req,res)=>{
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
      "amount": {
        "currency": "USD",
        "total": total.toString()
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
    if (error) 
    {
      id_user = id_class = id_type_user = ""
      res.json({success: false, data: error.message})
    } 
    else 
    {
      (async () => {
        console.log("in module")
        await createPayoutFailure(true)
      })()
      const time_class = moment().format("YYYY-MM-DD HH:mm:ss")
      const listclasseslist = [[id_user,id_class,id_type_user,time_class]]
      const jsonstr = await classmd.insertLissClasses_Data(listclasseslist)
      console.log(jsonstr)
      id_user = id_type_user = ""
      res.redirect("http://localhost:3000/payment-success")
    }
  });
}

async function buildRequestBody(includeValidationFailure) 
{
  const id_user = await classmd.getClassById_Data(id_class)
  const user = await accountmd.getUserById_Data(id_user)

  let senderBatchId = "Test_sdk_" + Math.random().toString(36).substring(7);
  return {
    "sender_batch_header": {
      "recipient_type": "EMAIL",
      "email_message": "SDK payouts test txn",
      "note": "Enjoy your Payout!!",
      "sender_batch_id": senderBatchId,
      "email_subject": "This is a test transaction from SDK"
    },
    "items": [{
      "note": "Your 1$ Payout!",
      "amount": {
        "currency": "USD",
        "value": "90"
      },
      "receiver": user.paypal_user,
      "sender_item_id": "Test_txn_1"
    }]
  }
}

async function createPayoutFailure(debug = false) 
{
  try {
    const request = new payoutsSdk.payouts.PayoutsPostRequest();
    request.requestBody(buildRequestBody(true));
    await payPalClient.client().execute(request);
  }
  catch (e) {
    if (e.statusCode) {
      if (debug) {
        console.log("Status code: ", e.statusCode);
        const error = JSON.parse(e.message)
        console.log("Failure response: ", error)
        console.log("Headers: ", e.headers)
      }
    } else {
      console.log(e)
    }
  }
}
