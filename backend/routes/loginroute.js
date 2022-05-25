const express = require("express")
const router = express.Router()
const accountctrl = require("../controllers/accountctrl")
const path = require("path")
const passport = require("passport")

router.route("/login")
  .get((req,res)=>{
    res.render("login")
  })
  .post(accountctrl.verifyAccount)

router.get("/login/google",passport.authenticate("google",{scope: ["email", "profile"]}))
router.get("/login/google/callback",passport.authenticate("google",{failureRedirect: '/user/login', successRedirect: '/user/home'}))

router.get("/home",accountctrl.getUserHome)

router.post("/getuserbyaccountid",accountctrl.getUserByAccountId1)

router.get("/logout",(req,res)=>{
  req.session.destroy()
  res.redirect("login")
})

module.exports = router