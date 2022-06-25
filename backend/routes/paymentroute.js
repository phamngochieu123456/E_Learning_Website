require("dotenv").config()
const express = require("express")
const router = express.Router()
const paymentctrl = require("../controllers/paymentctrl")


router.post("/pay",paymentctrl.pay)

router.get('/success', paymentctrl.successPay)

module.exports = router

