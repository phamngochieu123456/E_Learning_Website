const express = require("express")
const router = express.Router()
const classctrl = require("../controllers/classctrl")
const path = require("path")

router.route("/getallclass")
  .get(classctrl.getAllClass)

module.exports = router