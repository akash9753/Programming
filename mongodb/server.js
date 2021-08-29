const express = require('express')

const bodyparser = require('body-parser')

const routeremp = require('./routes/emp')



const app = express()

app.use(bodyparser.json())

app.use('/emp', routeremp)

app.listen(3000, '0.0.0.0' , () =>{
    console.log('server started on port 3000')
})