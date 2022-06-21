var classctrl = module.exports
const classmd = require("../models/classmd")
const util = require('util')
const {unrar, list} = require("unrar-promise")
const fs = require("fs")
const path = require("path")
const readdir = util.promisify(fs.readdir)
const uuid = require("uuid")
const moment = require("moment")

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

classctrl.decompressClass = async (req,res,next)=>{
  try
  {
    const inputpath = "./class_rawdata/" + req.files.class[0].originalname
    const outputpath = "./classes"
    await unrar(inputpath,outputpath)
    fs.unlinkSync(inputpath)
  }
  catch(err)
  {
    console.log("Error: " + err)
  }
  finally
  {
    next()
  }
}

classctrl.insertClassData = async (req,res)=>{
  try
  {
    var i = 0, j = 0, k = 0
    const classname = path.parse(req.files.class[0].originalname).name
    const classpath = "./classes" + "/" + classname
    const classname1 = req.body.name_class
    const id_class = uuid.v4()
    const price_class = req.body.price_class
    const description_class = req.body.description_class
    const overview_class = req.body.overview_class

    const ext = path.extname(req.files.image_class[0].originalname)
    fs.renameSync("./class_rawdata/" + req.files.image_class[0].originalname, "./public/imgclass/" + id_class + ext);

    const classlist = [[id_class, classname1, price_class, classpath, description_class, overview_class, "/imgclass/" + id_class + ext]]
  
    classmd.insertClass((err,res)=>{
      if(err)
      {
        console.log("Error: " + err)
      }
      else
      {
        console.log("Res: " + JSON.stringify(res))
      }
    },classlist)


    const weeks = await readdir(classlist[0][3], {withFileTypes: true})
    const weeklist = []
    for(i = 0; i < weeks.length; i++)
    {
      var weekpath = classlist[0][3] + "/" + weeks[i].name
      var l = weeks[i].name.length
      var weekorder = weeks[i].name.substring(l-1,l)
      var weekname = weeks[i].name.substring(0,l-2).replaceAll("_"," ")
      weeklist[i] = [uuid.v4(), weekname, classlist[0][0], weekorder, weekpath]
    }
    classmd.insertWeek((err,res)=>{
      if(err)
      {
        console.log("Error: " + err)
      }
      else
      {
        console.log("Res: " + JSON.stringify(res))
      }
    },weeklist)

    k = 0
    const topiclist = []
    for(i = 0; i < weeklist.length; i++)
    {
      var topics = await readdir(weeklist[i][4], {withFileTypes: true})
      for(j = 0; j < topics.length; j++)
      {
        var topicpath = weeklist[i][4] + "/" + topics[j].name
        var l = topics[j].name.length
        var topicorder = topics[j].name.substring(l-1,l)
        var topicname = topics[j].name.substring(0,l-2).replaceAll("_"," ")
        topiclist[k] = [uuid.v4(), topicname, weeklist[i][0], topicorder, topicpath]
        k++
      }
    }
    classmd.insertTopic((err,res)=>{
      if(err)
      {
        console.log("Error: " + err)
      }
      else
      {
        console.log("Res: " + JSON.stringify(res))
      }
    },topiclist)

    k = 0
    const subtopiclist = []
    for(i = 0; i < topiclist.length; i++)
    {
      var subtopics = await readdir(topiclist[i][4], {withFileTypes: true})
      for(j = 0; j < subtopics.length; j++)
      {
        var subtopicpath = topiclist[i][4] + "/" + subtopics[j].name
        var l = subtopics[j].name.length
        var subtopicorder = subtopics[j].name.substring(l-1,l)
        var subtopicname = subtopics[j].name.substring(0,l-2).replaceAll("_"," ")
        subtopiclist[k] = [uuid.v4(), subtopicname, topiclist[i][0], subtopicorder, subtopicpath]
        k++
      }
    }
    classmd.insertSubtopic((err,res)=>{
      if(err)
      {
        console.log("Error: " + err)
      }
      else
      {
        console.log("Res: " + JSON.stringify(res))
      }
    },subtopiclist)


    k = 0
    const documentlist = []
    for(i = 0; i < subtopiclist.length; i++)
    {
      var documents = await readdir(subtopiclist[i][4], {withFileTypes: true})
      for(j = 0; j < documents.length; j++)
      {
        var documentpath = subtopiclist[i][4] + "/" + documents[j].name
        var documentparse = path.parse(documents[j].name)
        documentlist[k] = [uuid.v4(), documentparse.name, subtopiclist[i][0], documentparse.ext, documentpath]
        k++
      }
    }
    classmd.insertDocument((err,res)=>{
      if(err)
      {
        console.log("Error: " + err)
      }
      else
      {
        console.log("Res: " + JSON.stringify(res))
      }
    },documentlist)


    const t = moment().format("YYYY-MM-DD HH:mm:ss")
    const lclist = [[req.body.id_user, id_class, req.body.id_type_user, t]]
    classmd.insertLissClasses((err,res)=>{
      if(err)
      {
        console.log("Error: " + err)
      }
      else
      {
        console.log("Res: " + JSON.stringify(res))
      }
    },lclist)


    res.json({success:true, data: "Insert Class Successfully!!!"})
  }

  catch(err)
  {
    console.log("Error: " + err)
    res.json({success: false, data: err})
  }
}

classctrl.updateClass = (req,res)=>{
  const id_class = req.body.id_class
  const name_class = req.body.name_class
  const price_class = req.body.price_class
  const description_class = req.body.description_class
  const overview_class = req.body.overview_class
  const listclasses = [name_class,price_class,description_class,overview_class,id_class]

  const ext = path.extname(req.file.image_class.originalname)
  fs.renameSync("./class_rawdata/" + req.file.image_class.originalname, "./public/imgclass/" + id_class + ext);

  classmd.updateClass((err,results)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: results})
    }
  },listclasses)
}

classctrl.deleteClass = (req,res)=>{
  const id_class = req.body.id_class
  const listclasses = [id_class]
  classmd.deleteClass((err,results)=>{
    if(err)
    {
      res.json({success: false, data: err})
    }
    else
    {
      res.json({success: true, data: results})
    }
  },listclasses)
}



