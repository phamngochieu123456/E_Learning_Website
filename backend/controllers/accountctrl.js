var accountctrl = module.exports
const accountmd = require("../models/accountmd")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const path = require("path")
const fs = require("fs")

accountctrl.getAllAccounts = (req,res)=>{
  accountmd.getAllAccounts((err,accounts)=>{
    if(err)
    {
      res.json({success: false, data: err.message})
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
        res.json({success:false, data:err.message})
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
        res.json({success:false, data:err.message})
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
        res.json({success:false, data:err.message})
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
        res.json({success:false,data:err.message})
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
    console.log("Error: " + err.message)
  }
}

accountctrl.insertAccountUser = (req,res)=>{
  const id_account = uuid.v4()
  const name_account = req.body.email
  const pass_account  = req.body.pass_account
  const pass_account_hash = bcrypt.hashSync(pass_account,5)

  const accountlist = [[id_account, pass_account_hash, name_account]]

  const phone_user = req.body.phone_user
  const birth_user = req.body.birth_user
  const sex_user = req.body.sex_user
  const name_type_user = req.body.Role
  const name_user = req.body.name_user
  const id_user = uuid.v4()

  const userlist = [[id_account, phone_user, birth_user, sex_user, name_type_user, name_user, id_user]]

  accountmd.insertAccountUser((err,results)=>{
    if(err)
    {
      console.log("Error1: " + err.message)
    }
    else
    {
      res.json({success: true, data: results}) 
    } 
  },accountlist,userlist)

}

accountctrl.updateAccount = async (req,res)=>{
  const jsonstradmin = await accountmd.isAdmin_Data(req.user.id_account)
  const jsonadmin  = JSON.parse(jsonstradmin)
  if(req.body.id_account == req.user.id_account || jsonadmin.success)
  {
    const pass_account  = req.body.pass_account
    const pass_account_hash = bcrypt.hashSync(pass_account,5)
    const accountlist = [pass_account_hash, req.body.id_account]
    accountmd.updateAccount((err,results)=>{
      if(err)
      {
        console.log("Error1: " + err.message)
      }
      else
      {
        res.json({success: true, data: results}) 
      } 
    },accountlist)
  }
  else
  {
    res.status(401).json({success:false, data: 'You are not authorized'})
  }
  
}

accountctrl.deleteAccount = (req,res)=>{
  const id_account = req.body.id_account

  const accountlist = [id_account]

  accountmd.deleteAccount((err,results)=>{
    if(err)
    {
      console.log("Error1: " + err.message)
    }
    else
    {
      res.json({success: true, data: results}) 
    } 
  },accountlist)
}

accountctrl.getAllUsers = async (req,res)=>{
  const jsonstr = await accountmd.getAllUsers()
  const json = JSON.parse(jsonstr)
  res.json(json)
}

accountctrl.updateUser = async (req,res)=>{

  const jsonstr = await accountmd.isUser(req.user.id_account,req.body.id_user) 
  const json = JSON.parse(jsonstr)
  const jsonstradmin = await accountmd.isAdmin_Data(req.user.id_account)
  const jsonadmin  = JSON.parse(jsonstradmin)

  if(json.success || jsonadmin.success)
  {
    const phone_user = req.body.phone_user
    const birth_user = req.body.birth_user
    const sex_user = req.body.sex_user
    const name_user = req.body.name_user
    const id_user = req.body.id_user
    var avatar_user = ""

    if(req.file)
    {
      const ext = path.extname(req.file.originalname)
      fs.renameSync("./user_rawdata/" + req.file.originalname, "./public/imguser/" + id_user + ext)
      avatar_user = "/imguser/" + id_user + ext
    }
    
    const userlist = [phone_user, avatar_user, birth_user, sex_user, name_user, id_user]

    accountmd.updateUser((err,results)=>{
      if(err)
      {
        console.log("Error1: " + err.message)
      }
      else
      {
        res.json({success: true, data: results}) 
      } 
    },userlist)
  }
  else
  {
    if(req.file)
    {
      fs.unlinkSync("./user_rawdata/" + req.file.originalname)
    }
    res.status(401).json({success:false, data: 'You are not authorized'})
  }
}

accountctrl.deleteUser = (req,res)=>{
  const id_user = req.body.id_user

  const userlist = [id_user]

  accountmd.deleteUser((err,results)=>{
    if(err)
    {
      console.log("Error1: " + err.message)
    }
    else
    {
      res.json({success: true, data: results}) 
    } 
  },userlist)
}

accountctrl.GetTypeUser = (req,res)=>{
  accountmd.GetTypeUser((err,type_user)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: type_user})
    }
  },req.body.email)
}
