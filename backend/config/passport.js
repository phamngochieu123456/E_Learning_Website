require("dotenv").config()
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const accountmd = require("../models/accountmd")
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "pnh"
};

passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    accountmd.verifyAccountJwt((err,account)=>{
      if(err)
      {
        done(err,false)
      }
      else
      {
        done(null,account)
      }
    },jwt_payload.name_account, jwt_payload.pass_account)
}))

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  callbackURL: "http://localhost:5000/user/login/google/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    accountmd.getAccountByEmail((err,account)=>{
      if(err)
      {
        cb(err,null)
      }
      else
      {
        cb(null,account)
      }
    },profile.email)
  }
));

passport.serializeUser(function (account, done) {
  done(null, account.id_account);
});

passport.deserializeUser(function (id, done) {
  accountmd.getAccountById((err,account)=>{
    if(err)
    {
      done(err,null)
    }
    else
    {
      done(null,account)
    }
  },id)
});
