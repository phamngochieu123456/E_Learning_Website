const express = require("express")
const router = express.Router()
const path = require("path")
const passport = require("passport")
const accountctrl = require("../controllers/accountctrl")

router.post("/jwt",passport.authenticate("jwt",{session:true}),accountctrl.getUserByAccountId)

router.post("/jwt/getnewtoken",accountctrl.getnewtoken)

module.exports = router