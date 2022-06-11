require("dotenv").config()
const express = require("express")
const router = express.Router()
// const paypal = require('paypal-rest-sdk')
const classmd = require("../models/classmd")

paypal.configure({
  'mode': 'sandbox',
  'client_id': process.env.CLIENTID_PAYPAL,
  'client_secret': process.env.CLIENTSECRET_PAYPAL
});


var total = 0

app.post("/pay",(req,res)=>{
  classmd.getClassById((err,classes)=>{
    if(err)
    {
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
                "items": items
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

app.get('/success', (req, res) => {
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
      res.redirect("http://localhost:3000/payment-success")
    }
  });
});

module.exports = router

