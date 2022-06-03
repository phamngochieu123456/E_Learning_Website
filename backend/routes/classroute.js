const express = require("express")
const router = express.Router()
const classctrl = require("../controllers/classctrl")
const path = require("path")

router.get("/getallclass",classctrl.getAllClass)

module.exports = router