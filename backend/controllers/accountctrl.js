var accountctrl = module.exports
const accountmd = require("../models/accountmd")

accountctrl.getAllAccounts = (req,res)=>{
  accountmd.getAllAccounts((err,accounts)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: accounts})
    }
  })
}

accountctrl.verifyAccount = (req,res)=>{
  if(req.body)
  {
    accountmd.verifyAccount((err,account)=>{
      if(err)
      {
        res.json({success:false, data:err})
      }
      else
      {
        res.cookie("accesstoken",account.accesstoken,{
          secure: false,
          httpOnly: false,
          sameSite: 'lax'
        })
        res.cookie("refreshtoken",account.refreshtoken,{
          secure: false,
          httpOnly: true,
          sameSite: 'lax',
          path: "/auth/jwt/getnewtoken"
        })
        res.json({success: true, data: account})
      }
    },req.body.email, req.body.password)
  }
  else
  {
    res.json({success: false, data: "Ten dang nhap va mat khau khong nam trong req.body"})
  }
}

accountctrl.getnewtoken = (req,res)=>{
  if(req.cookies.refreshtoken)
  {
    accountmd.getnewtoken((err,newaccesstoken)=>{
      if(err)
      {
        res.json({success:false, data:err})
      }
      else
      {
        res.cookie("accesstoken",newaccesstoken,{
          secure: false,
          httpOnly: false,
          sameSite: 'lax'
        })
        res.json({success: true, data: newaccesstoken})
      }
    },req.cookies.refreshtoken)
  }
  else
  {
    res.json({success: false, data: "Khong co refreshtoken trong body"})
  }
}

accountctrl.getUserByAccountId = (req,res)=>{
  if(req.user)
  {
    accountmd.getUserByAccountId((err,User)=>{
      if(err)
      {
        res.json({success:false, data:err})
      }
      else
      {
        res.json({success:true, data: User})
      }
    },req.user.id_account)
  }
  else
  {
    res.json({success: false, data: "Khong co req.user"})
  }
}

accountctrl.getUserHome = (req,res)=>{
  try
  {
    console.log(JSON.stringify(req.session))
    const account = req.user || req.session.jwt.user
    if(account)
    {
      accountmd.getUserByAccountId((err,User)=>{
        if(err)
        {
          res.render("userhome",{title: "Home", User: {name_user: "Client"}})
        }
        else
        {
          res.render("userhome",{title: "Home", User: User})
        }
      },account.id_account)
    }
    else
    {
      res.json({success: false, data: "Khong co req.user"})
    }
  }
  catch(err)
  {
    res.render("userhome",{title: "Home", User: {name_user: "Client"}})
    console.log("Error: " + err)
  }
}
