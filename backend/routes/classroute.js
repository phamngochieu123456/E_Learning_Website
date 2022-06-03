const express = require("express")
const router = express.Router()
const classctrl = require("../controllers/classctrl")
const path = require("path")

router.get("/getallclass",classctrl.getAllClass)
router.post("/getWeekByIdClass",classctrl.getWeekByIdClass)
router.post("/getTopicByIdWeek",classctrl.getTopicByIdWeek)
router.post("/getSubTopicByIdTopic",classctrl.getSubTopicByIdTopic)
router.post("/getDocumentBySubTopicId",classctrl.getDocumentBySubTopicId)

module.exports = router