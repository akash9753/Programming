const express = require('express')

//router is used to handel the routes
const router = express.Router()

router.get('/',(request,response)=>{
    console.log(`requestURL : ${request.url}`)
    console.log(`requestMethod : ${request.method}`)
    const arr = [{'requestURL' : request.url},
                {'requestMethod' :request.method}]
    
    response.send(arr)
    
})

router.post('/',(request,response)=>{
    console.log(`requestURL : ${request.url}`)
    console.log(`requestMethod : ${request.method}`)
    const arr = [{'requestURL' : request.url},
                {'requestMethod' :request.method}]
    
    response.send(arr)
})

router.put('/',(request,response)=>{
    console.log(`requestURL : ${request.url}`)
    console.log(`requestMethod : ${request.method}`)
    const arr = [{'requestURL' : request.url},
                {'requestMethod' :request.method}]
    
    response.send(arr)
})

router.delete('/',(request,response)=>{
    console.log(`requestURL : ${request.url}`)
    console.log(`requestMethod : ${request.method}`)
    const arr = [{'requestURL' : request.url},
                {'requestMethod' :request.method}]
    
    response.send(arr)
})

//the exported router can be imported and added into the server
module.exports = router