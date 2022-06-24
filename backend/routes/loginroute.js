const express = require("express")
const router = express.Router()
const accountctrl = require("../controllers/accountctrl")
const path = require("path")
const passport = require("passport")
const multer = require("multer")
const { isAdmin } = require("./authmiddleware")

const fileStorageEngine = multer.diskStorage({
  destination: (req,file,cb)=>{
    console.log("in destination: " + JSON.stringify(file))
    cb(null,"./user_rawdata")
  },
  filename: (req,file,cb)=>{
    console.log("in filename" + JSON.stringify(file))
    cb(null,file.originalname)
  }
})

const upload = multer({storage: fileStorageEngine})

router.post("/login",accountctrl.verifyAccount)

router.get("/login/google",passport.authenticate("google",{scope: ["email", "profile"]}))
router.get("/login/google/callback",passport.authenticate("google",{failureRedirect: 'http://localhost:3000/login', successRedirect: 'http://localhost:3000/dashboard'}))

router.post("/getuserbyaccountid",accountctrl.getUserByAccountId1)

router.get("/logout",(req,res)=>{
  req.session.destroy()
  res.end()
})

router.route("/islogin")
  .get((req,res)=>{
    if(req.user)
    {
      res.json({success: true, data: req.user})
    }
    else
    {
      res.json({success: false, data: "Is not login!!!"})
    }
  })

router.post("/signin",accountctrl.insertAccountUser)

router.post("/gettypeuser",accountctrl.GetTypeUser)

router.put("/updateAccount",accountctrl.updateAccount)
router.delete("/deleteAccount",isAdmin,accountctrl.deleteAccount)

router.put("/updateUser",upload.single("image_user"),accountctrl.updateUser)
router.delete("/deleteUser",isAdmin,accountctrl.deleteUser)


module.exports = router