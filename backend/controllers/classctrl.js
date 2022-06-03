var classctrl = module.exports
const classmd = require("../models/classmd")

classctrl.getAllClass = (req,res)=>{
  classctrl.getAllClass((err,classes)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: classes})
    }
  })
}