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

accountmd.insertAccountUser = async (result,accountlist, userlist) => {
  try
  {
    var sql = "INSERT INTO account (id_account, pass_account, name_account) VALUES ?"
    await query(sql,[accountlist])

    var sql1 = "select * from type_user where name_type_user = \"" + userlist[0][4] +"\""
    const type_users = await query(sql1)

    const type_user = type_users[0]
    var sql2 = "INSERT INTO user (id_account, phone_user, birth_user, sex_user, id_type_user, name_user, id_user) VALUES ?"
    userlist[0].splice(4,1,type_user.id_type_user)
    const results = await query(sql2,[userlist])
    result(null,"Insert Success!!!")
  }
  catch(err)
  {
    result(err,null)
  }
}

// accountmd.getIdTypeUserByNTU = async(result,Id) =>{
//   try
//   {
//     var type_users = await query("select * from type_user where id_type_user = \"" + Id+"\"")
//     result(null,type_users)
//   }
//   catch(err)
//   {
//     console.log("Error: " + err)
//     result(err,null)
//   }
// }

// accountmd.insertUser = async (result,userlist) =>{
//   try
//   {
//     var sql = "INSERT INTO user (id_account, phone_user, birth_user, sex_user, id_type_user, name_user, id_user) VALUES ?"
//     const results = await query(sql,[userlist])
//     result(null,results)
//   }
//   catch(err)
//   {
//     result(err,null)
//   }
// }