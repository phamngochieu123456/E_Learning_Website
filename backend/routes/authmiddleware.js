const authmiddleware = module.exports

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