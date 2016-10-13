'use strict'

const express = require('express')
const { Server } = require('http')
const mongoose = require('mongoose')
let path = require("path"); /////needed for html hosting
const React = require("react")
const os = require('os');


const app = express()
const server = Server(app)

/////////////OS and CPU Logic///////////////////////
function getInterval(){
  os.cpus()
  console.log(os.cpus()[0]);
  os.freemem()  //////free mmemory
  console.log(os.freemem()/((1048576)), "MB of free memory");
  console.log("system uptime", os.uptime(), "seconds");
}
console.log(os.totalmem()/((1073741824)), ":GB of total memory");
setInterval(getInterval, 1000)
// The process.arch property returns a String identifying the processor architecture that the Node.js process is currently running on.
// x64 is 64 bit platform
console.log("The Operating System is:", os.type(), os.arch()); //////darwin x64
/////////////
console.log("Computer being used:", os.hostname());
//////////Load Average//////////
console.log("1,5,15 minutes load averages", os.loadavg());
////////////////////////////////
console.log("User info", os.userInfo().username); /////could be useful

/////////////END OS and CPU Logic///////////////////////
// console.log(os.networkInterfaces()); More Complicated, will return to this
///////////////logical processors 
var cpus = os.cpus();

for(var i = 0, len = cpus.length; i < len; i++) {
    console.log("CPU %s:", i);
    var cpu = cpus[i], total = 0;

    for(var type in cpu.times) {
        total += cpu.times[type];
    }

    for(type in cpu.times) {
        console.log("\t", type, Math.round(100 * cpu.times[type] / total));
    }
}
console.log();


const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
