//importing a system (node) module
const os = require('os')
console.log(`architecture = ${os.platform()}`)
console.log(`hostname = ${os.hostname()}`)
console.log(`platform : ${os.platform()}`)
console.log(`homedir : ${os.homedir()}`)
console.log(`totalmem : ${os.totalmem()}`)
console.log(`freemem = ${os.freemem()}`)
console.log(`CPUS`)
console.log(os.cpus())
console.log(`network interfaces`)
console.log(os.networkInterfaces())