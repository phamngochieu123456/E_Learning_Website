var pdfctrl = module.exports

const fs = require("fs")
const classmd = require("../models/classmd")

pdfctrl.getPdfById = async (req,res)=>{
  if(await classmd.isDocumentUser(req.user.id_account,req.params.id))
  {
    classmd.getDocumentById((err,pdf)=>{
      if(err)
      {
        res.status(404).json({success:false, data: "No pdf found!!!"})
        console.log("Error: " + err)
      }
      else
      {
        var bookpath = pdf.path_document
        var file = fs.createReadStream(bookpath);
        var stat = fs.statSync(bookpath);
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        file.pipe(res)
      }
    },req.params.id)
  }
  else
  {
    res.status(401).json({success:false, data: 'You are not authorized'})
  }
  
}