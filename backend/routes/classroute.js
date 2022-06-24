const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")

const classctrl = require("../controllers/classctrl")
const { isTeacher, isAdmin } = require("./authmiddleware")

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
router.post("getClassByIdUser",classctrl.getClassByIdUser)
router.post("/getWeekByIdClass",classctrl.getWeekByIdClass)
router.post("/getTopicByIdWeek",classctrl.getTopicByIdWeek)
router.post("/getSubTopicByIdTopic",classctrl.getSubTopicByIdTopic)
router.post("/getDocumentBySubTopicId",classctrl.getDocumentBySubTopicId)
router.post("/isExistUserWithClass",classctrl.isExistUserWithClass)
router.post("/getIdTypeUserByName",classctrl.getIdTypeUserByName)
router.post("/insertClass",isTeacher,upload.fields([{name: "class", maxCount: 1}, {name: "image_class", maxCount: 1}]),classctrl.decompressClass,
classctrl.insertClassData)
router.put("/updateClass",upload.single("image_class"),classctrl.updateClass)
router.delete("/deleteClass",classctrl.deleteClass)

module.exports = router