const http = require('http')

const server = http.createServer((request, response)=>{
    console.log('request has been recieved')
    
    //url : the path (page) client is requesting
    console.log(`url = ${request.url}`)

    //method : http method client has used while sending the request
    console.log(`method = ${request.method}`)
    
    response.end('hello from server')
})

server.listen(3000, '0.0.0.0',()=>{
    console.log('server started listening on port 3000')
})