var express = require("express")
var router = express.Router()
const authmiddleware = require("./authmiddleware")
const pdfctrl = require("../controllers/pdfctrl")

router.use(authmiddleware.isAuth)

router.route("/read/:id")
  .get(pdfctrl.getPdfById)


module.exports = router