const express = require('express')
const routerUsers = require('./routes/users')
const routerNotes = require('./routes/notes')


const app = express()

app.use(express.json())

app.use('/user',routerUsers)
app.use('/note',routerNotes)


//default handler
app.get('/',(request,reponse)=>{
    response.send('welcome to note')
})


app.listen(3000, '0.0.0.0',()=>{
         console.log('server started on port 3000')
})