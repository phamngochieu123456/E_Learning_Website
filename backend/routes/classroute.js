const express = require("express")
const router = express.Router()
const classctrl = require("../controllers/classctrl")
const multer = require("multer")
const path = require("path")

const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb)=>{
      console.log("in destination: " + JSON.stringify(file))
      cb(null,"./class_rawdata")
    },
    filename: (req,file,cb)=>{
      console.log("in filename" + JSON.stringify(file))
      cb(null,file.originalname)
    }
  })
  
const upload = multer({storage: fileStorageEngine})

router.get("/getallclass",classctrl.getAllClass)
router.post("/getWeekByIdClass",classctrl.getWeekByIdClass)
router.post("/getTopicByIdWeek",classctrl.getTopicByIdWeek)
router.post("/getSubTopicByIdTopic",classctrl.getSubTopicByIdTopic)
router.post("/getDocumentBySubTopicId",classctrl.getDocumentBySubTopicId)
router.post("/isExistUserWithClass",classctrl.isExistUserWithClass)
router.post("/getIdTypeUserByName",classctrl.getIdTypeUserByName)
router.post("/insertLissClasses",classctrl.insertLissClasses)
router.post("/insertClass",upload.fields([{name: "class", maxCount: 1}, {name: "image_class", maxCount: 1}]),(req,res)=>{
    console.log(JSON.stringify(req.body))
    console.log("req.files: " + JSON.stringify(req.files))
    res.send("success")
})

// router.post("/insertClass",upload.single("image_class"),(req,res)=>{
//     console.log(JSON.stringify(req.body))
//     console.log("req.files: " + JSON.stringify(req.files))
//     res.send("success")
// })

module.exports = router