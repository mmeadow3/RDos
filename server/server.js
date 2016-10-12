'use strict'

const express = require('express')
const { Server } = require('http')
const mongoose = require('mongoose')
var path = require("path"); /////needed for html hosting
const React = require("react")
const os = require('os');

let CPUcore = os.cpus()
// The process.arch property returns a String identifying the processor architecture that the Node.js process is currently running on.
// x64 is 64 bit platform 
let osArch = os.arch()

console.log(CPUcore);
console.log(osArch);


const app = express()
const server = Server(app)

const PORT = process.env.PORT || 3000
// const MONGODB_URL =  process.env.MONGODB_URL || 'mongodb://localhost:27017/RDos'
//
// // app.set('view engine', 'pug')
//
// app.use(express.static('public')) /////telling to use the public file for JS files
//
//
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname + '/client/index.html'));
//   //__dirname : It will resolve to your project folder.
// });
//
//
// mongoose.Promise = Promise
// mongoose.connect(MONGODB_URL, () => {
//   server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
// })
app.listen(PORT, function () {
  console.log('listening on port 3000!');
});
