//step 1: require express
const express = require('express')

// step 2: create express application
const app = express()

// step 3: when url along with the method when it is associated 
// with express application this is called as Route
// Route is nothing but mapping http GET,url and handler method or function
// it can be annonymous function or arrow function
// GET /
app.get('/', (request,response)=>{
    console.log('GET / recieved')
    response.end('from GET /')
})

//step 4: listen on port 
app.listen(3000, '0.0.0.0', ()=>{
    console.log('server started on port 3000')
})