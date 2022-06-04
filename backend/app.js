require("dotenv").config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require("passport")
var cors = require('cors')

const loginroute = require("./routes/loginroute")
const authroute = require("./routes/authroute")
const videoroute = require("./routes/videoroute")
const classroute = require("./routes/classroute")
const pdfroute = require("./routes/pdfroute")

const app = express()

app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.set('view engine', 'ejs');
app.use(express.static("./public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

app.use(session({
  secret: process.env.SS_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')

app.use("/user",loginroute)
app.use("/auth",authroute)
app.use("/video",videoroute)
app.use("/class",classroute)
app.use("/pdf",pdfroute)

app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`)
})