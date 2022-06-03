var accountctrl = module.exports
const accountmd = require("../models/accountmd")
const bcrypt = require("bcrypt")
const uuid = require("uuid")

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
  if(req.body.refreshtoken)
  {
    accountmd.getnewtoken((err,newaccesstoken)=>{
      if(err)
      {
        res.json({success:false, data:err})
      }
      else
      {
        res.json({success: true, data: newaccesstoken})
      }
    },req.body.refreshtoken)
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
accountctrl.getUserByAccountId1=(req,res)=>{
  if(req.body)
  {
    accountmd.getUserByAccountId((err,User)=>{
      if(err)
      {
        res.json({success:false,data:err})
      }
      else
      {
        res.json({success:true,data:User})
     }
    },req.body.id_account)
  }
  else
  {
    res.json({success:false,data:"Khong co req.body"})
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

accountctrl.insertAccountUser = (req,res)=>{

  console.log("req.body: " + JSON.stringify(req.body))
  res.end()

  // const id_account = uuid.v4()
  // const name_account = req.body.name_account
  // const pass_account  = req.body.pass_account
  // const pass_account_hash = bcrypt.hashSync(pass_account,5)
  // const accountlist = [id_account,pass_account_hash,name_account]
  // const phone_user = req.body.phone_user
  // const birth_user = req.body.birth_user


  // accountmd.insertAccount((err,results1)=>{
  //   if(err)
  //   {
  //     console.log("Error: " + err)
  //   }
  //   else
  //   {
  //     accountmd.insertUser((err,results2)=>{
  //       if(err)
  //       {
  //         console.log("Error: " + err)
  //       }
  //       else
  //       {
  //         res.json({success: true, data: results2})
  //       }
  //     })
  //   }
  // },accountlist)



}
