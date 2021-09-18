//step 1 : get the http module
const http = require('http')

//step 2 : create a http server
const server = http.createServer((request, response) =>{
   console.log('a request recieved')

   //send the response
   response.end("hello from server")
})

//step 3 : start the server
server.listen(4000,'0.0.0.0', ()=>{
    console.log(`server started susseccfully`)
})