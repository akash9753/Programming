const express = require('express')

const products = [
   {id:1,title:'product 1', description:"this is product 1", price:100},
   {id:2,title:'product 2', description:"this is product 2", price:100}
]

const app = express()

app.get('/',(request,response)=>{
    response.end("My Rest APIs")
})

app.get('/product',(request,response)=>{

    //change the content type
    response.setHeader('Content-Type','application/json')
    // convert the json array to string
    response.end(JSON.stringify(products))
    console.log(products)
})

app.post('/product',(request,response)=>{
    request.body
    console.log(body)
    response.setHeader('Content-Type','application/json')
    response.end(JSON.stringify(products))
})

app.listen(3000, '0.0.0.0', ()=>{
    console.log('server started at port 3000')
})