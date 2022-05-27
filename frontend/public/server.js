const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
// const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use("/api/login", createProxyMiddleware({ 
//     target: 'http://localhost:3000/', //original url
//     changeOrigin: true, 
//     secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//        res.send({
//          token: 'test123'
//        })
//     }
// }));

// app.use("/api/login",(req,res)=>{
//   // res.writeHead(200,{"Access-Control-Allow-Origin":"*"})
//   res.send({token: "test123"})
// })

app.get("/api/login",(req,res)=>{
  // res.json({token: "123456"})
  res.redirect("/")
})

app.get("/",(req,res)=>{
  res.json({token: "123"})
})

app.listen(5000,()=>{
  console.log("Server listen on port 5000")
});