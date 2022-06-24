const authmiddleware = module.exports
const accountmd = require("../models/accountmd")

authmiddleware.isAuth = (req, res, next) => {
  try
  {
    const account = req.user
    if(account)
    {
      next()
    }
    else
    {
      res.status(401).json({success:false, data: 'You are not authorized to view this resource'})
    }
  }
  catch(err)
  {
    console.log("Error: " + err)
    res.status(401).json({success:false, data: 'You are not authorized to view this resource'})
  }
}

authmiddleware.isTeacher = (req, res, next) => {
  try
  {
    const account = req.user
    if(account)
    {
      accountmd.IsTeacher((err,users)=>{
        if(err)
        {
          console.log("Error: " + err)
          res.status(401).json({success:false, data: 'You are not authorized'})
        }
        else
        {
          next()
        }
      },req.user.id_account) 
    }
    else
    {
      res.status(401).json({success:false, data: 'You are not authorized'})
    }
  }
  catch(err)
  {
    console.log("Error: " + err)
    res.status(401).json({success:false, data: 'You are not authorized'})
  }
}

authmiddleware.isAdmin = (req, res, next) => {
  try
  {
    const account = req.user
    if(account)
    {
      accountmd.IsAdmin((err,users)=>{
        if(err)
        {
          console.log("Error: " + err)
          res.status(401).json({success:false, data: 'You are not authorized'})
        }
        else
        {
          next()
        }
      },req.user.id_account) 
    }
    else
    {
      res.status(401).json({success:false, data: 'You are not authorized'})
    }
  }
  catch(err)
  {
    console.log("Error: " + err)
    res.status(401).json({success:false, data: 'You are not authorized'})
  }
}