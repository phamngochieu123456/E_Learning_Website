var accountmd = module.exports
const conn = require("../config/database")
const bcrypt = require("bcrypt")
const util = require("util");
const jwt = require("jsonwebtoken")
const query = util.promisify(conn.query).bind(conn);

accountmd.getAllAccounts = async (result) =>{
  try
  {
    var results = await query("select * from account where active_account = 1")
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
    var results = await query("select * from account where name_account = \"" + Email+"\" and active_account = 1")
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
    var results = await query("select * from account where id_account = \"" + Id+"\" and active_account = 1")
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
    var users = await query("select * from user where id_account = \"" + Id+"\" and active_user = 1")
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
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.updateAccount = async (result,accountlist) => {
  try
  {
    var sql = "UPDATE account SET pass_account = ? WHERE id_account = ?"
    const results = await query(sql,accountlist)
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.deleteAccount = async (result,accountlist) => {
  try
  {
    var sql = "UPDATE account SET active_account = 0 WHERE id_account = ?"
    const results = await query(sql,accountlist)
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.getAllUsers = async ()=>{
  try
  {
    var sql = "SELECT * FROM user WHERE active_user = 1"
    const results = await query(sql)
    const json = {success: true, data: results}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
  catch(err)
  {
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
  
}

accountmd.updateUser = async (result,userlist) => {
  try
  {
    var sql = "UPDATE user SET phone_user = ?, avatar_user = ?, birth_user = ?, sex_user = ?, name_user = ? WHERE id_user = ?"
    const results = await query(sql,userlist)
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.deleteUser = async (result,userlist) => {
  try
  {
    var sql = "UPDATE user SET active_user = 0 WHERE id_user = ?"
    const results = await query(sql,userlist)
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

accountmd.GetTypeUser = async (result,email) => {
  try
  {
    const sql = `SELECT type_user.name_type_user, type_user.id_type_user FROM (account INNER JOIN user ON account.id_account = user.id_account) INNER JOIN type_user 
    ON user.id_type_user = type_user.id_type_user WHERE account.name_account = "` + email + `"`
    var results = await query(sql)
    result(null,results[0])   
  }
  catch(err)
  {
    console.log("Error: " + err)
    result(err,null)
  }
}

accountmd.isTeacher = async (result,id_account) => {
  try
  {
    const sql = `SELECT * FROM (account INNER JOIN user ON account.id_account = user.id_account) INNER JOIN type_user 
    ON user.id_type_user = type_user.id_type_user WHERE account.id_account = "` + id_account + `"` + `and 
    type_user.name_type_user = "TEACHER"`
    var results = await query(sql)
    
    if(results.length>0)
    {
      result(null,results[0])
    }
    else
    {
      result("User type is not teacher",null)
    }    
  }
  catch(err)
  {
    console.log("Error: " + err)
    result(err,null)
  }
}

accountmd.isAdmin = async (result,id_account) => {
  try
  {
    const sql = `SELECT * FROM (account INNER JOIN user ON account.id_account = user.id_account) INNER JOIN type_user 
    ON user.id_type_user = type_user.id_type_user WHERE account.id_account = "` + id_account + `"` + `and 
    type_user.name_type_user = "ADMIN"`
    var results = await query(sql)
    
    if(results.length>0)
    {
      result(null,results[0])
    }
    else
    {
      result("User type is not admin",null)
    }    
  }
  catch(err)
  {
    console.log("Error: " + err)
    result(err,null)
  }
}

accountmd.isAdmin_Data = async (id_account) => {
  try
  {
    const sql = `SELECT * FROM (account INNER JOIN user ON account.id_account = user.id_account) INNER JOIN type_user 
    ON user.id_type_user = type_user.id_type_user WHERE account.id_account = "` + id_account + `"` + `and 
    type_user.name_type_user = "ADMIN"`
    var results = await query(sql)
    
    if(results.length>0)
    {
      const json = {success: true, data: results[0]}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: "User type is not admin"}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }    
  }
  catch(err)
  {
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}

accountmd.isUser = async (id_account,id_user) => {
  try
  {
    const sql = `SELECT * FROM user WHERE id_account = "` + id_account + `"` + ` and  id_user = "` + id_user + `"`
    var results = await query(sql)
    
    if(results.length>0)
    {
      const json = {success: true, data: results[0]}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: "User is not exist!!!"}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }    
  }
  catch(err)
  {
    const json = {success: false, data: err.message}
    const jsonstr = JSON.stringify(json)
    return jsonstr
  }
}
