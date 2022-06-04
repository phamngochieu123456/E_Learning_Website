var classctrl = module.exports
const classmd = require("../models/classmd")

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
