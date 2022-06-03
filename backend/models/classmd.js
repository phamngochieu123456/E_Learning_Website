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