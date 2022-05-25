require("dotenv").config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require("passport")

const loginroute = require("./routes/loginroute")
const authroute = require("./routes/authroute")
const videoroute = require("./routes/videoroute")

const app = express()

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

app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`)
})