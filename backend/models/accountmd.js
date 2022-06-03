var accountmd = module.exports
const conn = require("../config/database")
const bcrypt = require("bcrypt")
const util = require("util");
const jwt = require("jsonwebtoken")
const query = util.promisify(conn.query).bind(conn);

accountmd.getAllAccounts = async (result) =>{
  try
  {
    var results = await query("select * from account")
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.getAccountByEmail= async (result,Email) =>{
  try
  {
    var results = await query("select * from account where name_account = \"" + Email+"\"")
    result(null,results[0])
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.getAccountById= async (result,Id) =>{
  try
  {
    var results = await query("select * from account where id_account = \"" + Id+"\"")
    result(null,results[0])
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.verifyAccount = async (result,username,password) => {
  try
  {
    var results = await query("select * from account where name_account = \"" + username+"\"")
    if(results.length>0)
    {
      const res = bcrypt.compareSync(password,results[0].pass_account)
      if(res)
      {
        const accesstoken = jwt.sign({id_account: results[0].id_account, pass_account: results[0].pass_account,
        name_account: results[0].name_account},"pnh",{expiresIn: "30m"})
        const refreshtoken = jwt.sign({id_account: results[0].id_account, pass_account: results[0].pass_account,
        name_account: results[0].name_account},"pnhre")
        result(null,{user: results[0], accesstoken: accesstoken, refreshtoken: refreshtoken})
      }
      else
      {
        result("Sai mat khau",null)
      }
    }
    else
    {
      result("Sai email",null)
    }
  }
  catch(err)
  {
    console.log("err: " + err)
    result(err,null)
  }
}

accountmd.verifyAccountJwt = async (result,email,password) => {
  try
  {
    var results = await query("select * from account where name_account = \"" + email+"\"")
    if(results[0].pass_account === password)
    {
      result(null,results[0])
    }
  }
  catch(err)
  {
    console.log("Err: " + err)
    result(err,null)
  }
}

accountmd.getnewtoken = async (result,refreshtoken) => {
  try
  {
    const account = jwt.verify(refreshtoken,"pnhre")
    this.verifyAccountJwt((err,account)=>{
      if(err)
      {
        result(err,null)
      }
      else
      {
        const newaccesstoken = jwt.sign({id_account: account.id_account, pass_account: account.pass_account,
        name_account: account.name_account},"pnh",{expiresIn: "15s"})
        result(null,newaccesstoken)
      }
    }, account.name_account, account.pass_account)
  }
  catch(err)
  {
    console.log("Error: " + err)
    result(err,null)
  }
}

accountmd.getUserByAccountId = async(result,Id) =>{
  try
  {
    var users = await query("select * from user where id_account = \"" + Id+"\"")
    result(null,users[0])
  }
  catch(err)
  {
    console.log("Error: " + err)
    result(err,null)
  }
}

accountmd.getnewtoken = async (result,refreshtoken) => {
  try
  {
    const account = jwt.verify(refreshtoken,"pnhre")
    this.verifyAccountJwt((err,account)=>{
      if(err)
      {
        result(err,null)
      }
      else
      {
        const newaccesstoken = jwt.sign({id_account: account.id_account, pass_account: account.pass_account,
        name_account: account.name_account},"pnh",{expiresIn: "15s"})
        result(null,newaccesstoken)
      }
    }, account.name_account, account.pass_account)
  }
  catch(err)
  {
    console.log("Error: " + err)
    result(err,null)
  }
}

accountmd.insertAccount = async (result,accountlist) =>{
  try
  {
    var sql = "INSERT INTO account (id_account, pass_account, name_account) VALUES ?"
    const results = await query(sql,[accountlist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.insertUser = async (result,userlist) =>{
  try
  {
    var sql = "INSERT INTO user (id_account, phone_user, birth_user, sex_user, id_type_user, name_user, id_user) VALUES ?"
    const results = await query(sql,[userlist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}