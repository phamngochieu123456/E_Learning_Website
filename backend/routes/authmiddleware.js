const authmiddleware = module.exports

authmiddleware.isAuth = (req, res, next) => {
  try
  {
    const account = req.user || req.session.jwt.user
    if(account)
    {
      next()
    }
    else
    {
      res.status(401).json({ data: {msg: 'You are not authorized to view this resource'} })
    }
  }
  catch(err)
  {
    console.log("Error: " + err)
    res.status(401).json({data: {Error: err, msg: "You are not authorized to view this resource"}})
  }
}