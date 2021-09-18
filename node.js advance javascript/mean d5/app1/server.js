//step 1: require express
const express = require('express')

// step 2: create express application
const app = express()

// step 3:
//GET /
app.get('/', (request,response)=>{
    
})

//step 4: listen on port 
app.listen(3000, '0.0.0.0', ()=>{
    console.log('server started on port 3000')
})