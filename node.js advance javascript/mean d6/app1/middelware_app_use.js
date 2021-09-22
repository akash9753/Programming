const express = require('express')
const app = express()

//middleware
//the fun will be called before any of the routes
function log(request, response, next){
    console.log('inside log function')
    console.log(`method: ${request.method}`)
    console.log(`Url: ${request.url}`)
    //call the next method
    //next will refer next function call
    next()
}

//app will call the log function first before excecuting the route handler
//1 -> log
//2 -> respective route handler will call
app.use(log)

app.get('/',(request,response)=>{
   //log(request, response)
   console.log('inside get /')
    response.end('welcome to rest api')
})

app.post('/',(request,response)=>{
    //log(request, response)
    console.log('inside post /')
    response.end('welcome to rest api')
})

app.put('/',(request,response)=>{
    //log(request, response)
    console.log('inside put /')
    response.end('welcome to rest api')
})

app.delete('/',(request,response)=>{
    //log(request, response)
    console.log('inside delete /')
    response.end('welcome to rest api')
})

app.listen(3000, '0.0.0.0',()=>{
   console.log('server started at port 3000')
})