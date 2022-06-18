var classctrl = module.exports
const classmd = require("../models/classmd")
// const moment = require("moment")

classctrl.getAllClass = (req,res)=>{
  classmd.getAllClass((err,classes)=>{
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

classctrl.getWeekByIdClass = (req,res)=>{
  classmd.getWeekByIdClass((err,weeks)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: weeks})
    }
  },req.body.id_class)
}

classctrl.getTopicByIdWeek = (req,res)=>{
  classmd.getTopicByIdWeek((err,topics)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: topics})
    }
  },req.body.id_week)
}

classctrl.getSubTopicByIdTopic = (req,res)=>{
  classmd.getSubTopicByIdTopic((err,sub_topics)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: sub_topics})
    }
  },req.body.id_topic)
}

classctrl.getDocumentBySubTopicId = (req,res)=>{
  classmd.getDocumentBySubTopicId((err,documents)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: documents})
    }
  },req.body.id_sub_topic)
}

classctrl.isExistUserWithClass = (req,res)=>{
  classmd.isExistUserWithClass((err,results)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: results})
    }
  },req.body.id_user, req.body.id_class)
}

classctrl.insertLissClasses = (req,res)=>{

  const id_user = req.body.id_user
  const id_class = req.body.id_class
  const id_type_user = req.body.id_type_user
  const time_class = moment().format("YYYY-MM-DD HH:mm:ss")
  const listclasseslist = [[id_user,id_class,id_type_user,time_class]]

  classmd.insertLissClasses((err,results)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: results})
    }
  },listclasseslist)
}

classctrl.getIdTypeUserByName = (req,res)=>{
  classmd.getIdTypeUserByName((err,id_type_user)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: id_type_user})
    }
  },req.body.name_type_user)
}

classctrl.insertClass = (req,res)=>{
  
  console.log(JSON.stringify(req.body))
  console.log("req.files: " + JSON.stringify(req.files))
  res.send("success")

}
