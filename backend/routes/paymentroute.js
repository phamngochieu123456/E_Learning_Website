require("dotenv").config()
const express = require("express")
const router = express.Router()
const paypal = require('paypal-rest-sdk')
const classmd = require("../models/classmd")
const payoutsSdk = require('@paypal/payouts-sdk');
const payPalClient = require('./payPalClient');

paypal.configure({
  'mode': 'sandbox',
  'client_id': process.env.CLIENTID_PAYPAL,
  'client_secret': process.env.CLIENTSECRET_PAYPAL
});

var total = 0

router.post("/pay",(req,res)=>{
  classmd.getClassById((err,classes)=>{
    if(err)
    {
      console.log("Error: " + err)
      res.json({success: false, data: err})
    }
    else
    {

      total = classes.price_class

      const items = {
        "name": classes.name_class,
        "sku": classes.id_class,
        "price": classes.price_class,
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
      });

    }
  },req.body.id_class)
})

router.get('/success', (req, res) => {
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

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) 
    {
      res.json({success: false, data: err})
    } 
    else 
    {

      (async () => {
        console.log("in module")
        await createPayoutFailure(true)
      })()

      res.redirect("http://localhost:3000/payment-success")
    }
  });
});



function buildRequestBody(includeValidationFailure) 
{
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
      "receiver": "sb-3rt5l16906209@personal.example.com",
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


module.exports = router

