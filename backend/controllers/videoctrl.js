var videoctrl = module.exports


const fs = require("fs")
const classmd = require("../models/classmd")

videoctrl.getVideoById = (req,res)=>{
  classmd.getDocumentById((err,video)=>{
    if(err)
    {
      res.status(404).json({success:false, data: "No video found!!!"})
      console.log("Error: " + err)
    }
    else
    {
      const range = req.headers.range;
      if (!range) 
      {
        res.status(400).json({success:false, data: "Requires range header"})
      }
      else
      {    
        const videoPath = video.path_document
        const videoSize = fs.statSync(videoPath).size;
        const CHUNK_SIZE = 4**20;
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength = end - start + 1;
        const headers1 = {
          "Content-Range": `bytes ${start}-${end}/${videoSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": contentLength,
          "Content-Type": "video/mp4",
        };
        res.writeHead(206, headers1);
        const videoStream = fs.createReadStream(videoPath, { start, end });
        videoStream.pipe(res);
    }
  }},req.params.id)
}
