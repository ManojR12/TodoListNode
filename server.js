const express = require("express")
const app = express()
const http = require("http")

const server = http.createServer(app)

server.listen(4000, (req,res)=>{
    console.log("Server port is 4000 connected successfully" );

})