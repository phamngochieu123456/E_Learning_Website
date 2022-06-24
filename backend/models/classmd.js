var classmd = module.exports
const conn = require("../config/database")
const util = require("util")
const query = util.promisify(conn.query).bind(conn);

classmd.getAllClass = async (result) =>{
  try
  {
    var results = await query("select * from class where active_class = 1")
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getClassByIdUser = async (result,id_user) =>{
  try
  {
    const sql = `SELECT * FROM class INNER JOIN list_classes ON class.id_class = list_classes.id_class WHERE 
    list_classes.id_user = "` + id_user + `"`
    var results = await query(sql)
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getClassById = async (result,id_class) =>{
  try
  {
    var results = await query("select * from class where id_class = \"" + id_class + "\"" +"and active_class = 1")
    result(null,results[0])
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getClassById_Data = async (id_class) =>{
  try
  {
    const results = await query("select * from class where id_class = \"" + id_class + "\"" +"and active_class = 1")
    const json = {success: true, data: results[0]}
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

classmd.getWeekByIdClass = async (result,id_class) =>{
  try
  {
    var results = await query("select * from week where id_class = \"" + id_class + "\"" + "order by order_week")
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getTopicByIdWeek = async (result,id_week) =>{
  try
  {
    var results = await query("select * from topic where id_week = \"" + id_week + "\"" + "order by order_topic")
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getSubTopicByIdTopic = async (result,id_topic) =>{
  try
  {
    var results = await query("select * from sub_topic where id_topic = \"" + id_topic + "\"" + "order by order_sub_topic")
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getDocumentBySubTopicId = async (result,id_sub_topic) =>{
  try
  {
    var results = await query("select * from document where id_sub_topic = \"" + id_sub_topic + "\"" )
    result(null,results[0])
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getDocumentById = async (result,id_document) =>{
  try
  {
    var results = await query("select * from document where id_document = \"" + id_document + "\"")
    result(null,results[0])
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.isExistUserWithClass = async (result, id_user, id_class) =>{
  try
  {
    const results = await query("select * from list_classes where id_user = \"" + id_user +"\"" + "and id_class = \"" + id_class +"\"")
    result(null,results[0])
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.insertLissClasses = async (result, listclasseslist) =>{
  try
  {
    var sql = "INSERT INTO list_classes (id_user, id_class, id_type_user, time_class) VALUES ?"
    const results = await query(sql,[listclasseslist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.getIdTypeUserByName = async (result,name_type_user) =>{
  try
  {
    var results = await query("select * from type_user where name_type_user = \"" + name_type_user + "\"")
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.insertClass = async (result,classlist) =>{
  try
  {
    var sql = "INSERT INTO class (id_class, name_class, price_class, path_class, description_class, overview_class, img_path_class) VALUES ?"
    const results = await query(sql,[classlist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.insertWeek = async (result,weeklist) =>{
  try
  {
    var sql = "INSERT INTO week (id_week, name_week, id_class, order_week, path_week) VALUES ?"
    const results = await query(sql,[weeklist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.insertTopic = async (result,topiclist) => {
  try
  {
    var sql = "INSERT INTO topic (id_topic, name_topic, id_week, order_topic, path_topic) VALUES ?"
    const results = await query(sql,[topiclist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.insertSubtopic = async (result,subtopiclist) => {
  try
  {
    var sql = "INSERT INTO sub_topic (id_sub_topic, name_sub_topic, id_topic, order_sub_topic, path_sub_topic) VALUES ?"
    const results = await query(sql,[subtopiclist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.insertDocument = async (result,documentllist) => {
  try
  {
    var sql = "INSERT INTO document (id_document, name_document, id_sub_topic, type_document, path_document) VALUES ?"
    const results = await query(sql,[documentllist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.insertLissClasses = async (result,lclist) =>{
  try
  {
    var sql = "INSERT INTO list_classes (id_user, id_class, id_type_user, time_class) VALUES ?"
    const results = await query(sql,[lclist])
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.isTeacherClass = async (id_user,id_class) => {
  try
  {
    const sql = `SELECT * FROM (list_classes INNER JOIN user ON list_classes.id_user = user.id_user) INNER JOIN type_user ON 
    type_user.id_type_user = user.id_type_user WHERE list_classes.id_class = "` + id_class + `"` + `and list_classes.id_user = "` 
    + id_user + `"` + `and type_user.name_type_user = "TEACHER"`
    var results = await query(sql)
    if(results.length>0)
    {
      const json = {success: true, data: results[0]}
      const jsonstr = JSON.stringify(json)
      return jsonstr
    }
    else
    {
      const json = {success: false, data: "You are not teacher of this class!!!"}
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

classmd.updateClass = async (result, listclasses) => {
  try
  {
    var sql = "UPDATE class SET name_class = ?, price_class = ?, img_path_class = ?, description_class = ?, overview_class = ? WHERE id_class = ?"
    const results = await query(sql,listclasses)
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.deleteClass = async (result, listclasses) => {
  try
  {
    var sql = "UPDATE class SET active_class = 0 WHERE id_class = ?"
    const results = await query(sql,listclasses)
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.deleteAll = async (result) => {
  try
  {
    await query("DELETE FROM listclasses")
    await query("DELETE FROM document")
    await query("DELETE FROM sub_topic")
    await query("DELETE FROM topic")
    await query("DELETE FROM week")
    await query("DELETE FROM class")
    
    
    
    result(null,{msg: "success"})
  }
  catch(err)
  {
    result(err,null)
  }
}

classmd.isDocumentUser = async (id_account,id_document) => {
  try
  {
    const sql = `SELECT * FROM account INNER JOIN user ON account.id_account = user.id_account INNER JOIN 
    list_classes ON user.id_user = list_classes.id_user INNER JOIN class ON list_classes.id_class = class.id_class INNER JOIN week 
    ON class.id_class = week.id_class INNER JOIN topic ON week.id_week = topic.id_week INNER JOIN sub_topic ON 
    topic.id_topic = sub_topic.id_topic INNER JOIN document ON sub_topic.id_sub_topic = document.id_sub_topic WHERE document.id_document = "` 
    + id_document + `"` + `and account.id_account = "` + id_account + `"`
    var results = await query(sql)
    if(results.length>0)
    {
      return true
    }
    else
    {
      return false
    }    
  }
  catch(err)
  {
    console.log("Error: " + err)
    return false
  }
}