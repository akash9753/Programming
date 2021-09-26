const express = require('express')
//const bodyParser = require('body-parser')

const userRouter = require('./routes/user')
const userNote = require('./routes/note')
const categoryRouter = require('./routes/category')

const app = express()
//app.use(bodyParse.json())
app.use(express.json())


//add all the user routes
app.use('/user',userRouter)
//add all the notes routes
app.use('/note',userNote)
//add all the category routes
app.use('/category',categoryRouter)

app.listen(3000, '0.0.0.0',()=>{
        console.log("server started on port 3000")
})
