var classmd = module.exports
const conn = require("../config/database")
const util = require("util");
const query = util.promisify(conn.query).bind(conn);

classmd.getAllClass = async (result) =>{
  try
  {
    var results = await query("select * from class")
    result(null,results)
  }
  catch(err)
  {
    result(err,null)
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

