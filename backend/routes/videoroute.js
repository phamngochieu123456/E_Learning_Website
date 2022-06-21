var express = require("express")
var router = express.Router()
const authmiddleware = require("./authmiddleware")
const videoctrl = require("../controllers/videoctrl")

router.use(authmiddleware.isAuth)

router.route("/watch/:id")
  .get(videoctrl.getVideoById)

module.exports = router