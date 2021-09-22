
const express = require('express')

const app = express()

function log1(request, response, next){
    console.log('inside function log 1')

    console.log(`method: ${request.method}`)
    console.log(`Url: ${request.url}`)
    next()
}

function log2(request, response, next){
    console.log('inside function log 2')

    console.log(`method: ${request.method}`)
    console.log(`Url: ${request.url}`)
    next()
}

app.use(log1)
app.use(log2)

app.get('/',(request,response)=>{
    console.log('inside GET /')
    response.end('this is GET /')
})

app.listen(3000, '0.0.0.0',(request, response)=>{
    console.log('server started on port 3000')
})