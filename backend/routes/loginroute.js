const express = require("express")
const router = express.Router()
const accountctrl = require("../controllers/accountctrl")
const path = require("path")
const passport = require("passport")

router.post("/login",accountctrl.verifyAccount)

router.get("/login/google",passport.authenticate("google",{scope: ["email", "profile"]}))
router.get("/login/google/callback",passport.authenticate("google",{failureRedirect: 'http://localhost:3000/login', successRedirect: 'http://localhost:3000/dashboard'}))

router.get("/home",accountctrl.getUserHome)

router.post("/getuserbyaccountid",accountctrl.getUserByAccountId1)

router.get("/logout",(req,res)=>{
  console.log("in logout")
  req.session.destroy()
  res.redirect("login")
})

router.route("/islogin")
  .get((req,res)=>{
    if(req.user)
    {

      console.log(JSON.stringify(req.user))

      res.json({success: true, data: req.user})
    }
    else
    {
      res.json({success: false, data: "Is not login!!!"})
    }
  })

module.exports = router