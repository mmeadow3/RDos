'use strict'

const express = require('express')
const { Server } = require('http')
const mongoose = require('mongoose')
var path = require("path"); /////needed for html hosting
const React = require("react")

const app = express()
const server = Server(app)

const PORT = process.env.PORT || 3000
const MONGODB_URL =  process.env.MONGODB_URL || 'mongodb://localhost:27017/RDos'

// app.set('view engine', 'pug')

app.use(express.static('public')) /////telling to use the public file for JS files


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/client/index.html'));
  //__dirname : It will resolve to your project folder.
});


mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
})
