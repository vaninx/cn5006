const os=require("os") 
const util = require("util")

console.log("tmpdir: " + os.tmpdir())
console.log("platform: " + os.platform())
console.log("release: " + os.release())
console.log("uptime: " + os.uptime())
console.log("total memory: " + os.totalmem())
console.log("free memory: " + os.tmpdir())
console.log("cpus: " + util.inspect(os.cpus()))
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()))