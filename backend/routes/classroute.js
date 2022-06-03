const express = require("express")
const router = express.Router()
const classctrl = require("../controllers/classctrl")
const path = require("path")

router.get("/getallclass",classctrl.getAllClass)
router.post("/getWeekByIdClass",classctrl.getWeekByIdClass)

module.exports = router