var express = require("express")
var router = express.Router()
const authmiddleware = require("./authmiddleware")
const videoctrl = require("../controllers/videoctrl")

router.use(authmiddleware.isAuth)

router.route("/watch/:id")
  .get(videoctrl.getVideoById)

// router.get("/",authmiddleware.isAuth,(req,res)=>{
//   res.render("video",{title: "Video"})
// })

// router.get("/watch",authmiddleware.isAuth,(req,res)=>{
//   const range = req.headers.range;
//   if (!range) 
//   {
//       res.status(400).json({success:false, data: "Requires range header"})
//   }
//   else
//   {    
//     const videoPath = "./video/C++ in 100 Seconds.mp4"
//     const videoSize = fs.statSync(videoPath).size;
//     const CHUNK_SIZE = 2**20;
//     const start = Number(range.replace(/\D/g, ""));
//     const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
//     const contentLength = end - start + 1;
//     const headers1 = {
//       "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": contentLength,
//       "Content-Type": "video/mp4",
//     };
//     res.writeHead(206, headers1);
//     const videoStream = fs.createReadStream(videoPath, { start, end });
//     videoStream.pipe(res);
//   }
// })

module.exports = router