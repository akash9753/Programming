const express = require('express')
const db = require('../db')
const utils = require('../utils')
const  urlAndMethod= require('../urlAndMethod')
//router is used to handel the routes
const router = express.Router()

router.get('/getAllNotes',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))
    const statement = `select * from note`
    db.query(statement,(error,dbResult)=>{
        response.send(utils.createResult(error,dbResult))
        })
    
})

router.get('/getNotesByUserId',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))
    const userId = request.body.userId
    const statement = `select * from note where userId = ${userId}`
    db.query(statement,(error,dbResult)=>{
        response.send(utils.createResult(error,dbResult))
        })
})

router.post('/createNote',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))

    const userId = request.body.userId
    const contents = request.body.contents

    const statement = `insert into note (userId, contents) values ('${userId}', '${contents}')`

    db.query(statement,(error,dbResult)=>{
    response.send(utils.createResult(error,dbResult))
    })
})

router.put('/updateNote',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))
    const noteId = request.body.noteId
    const contents = request.body.contents

    const statement = `update note set contents = '${contents}' where noteId = ${noteId}`

    db.query(statement,(error,dbResult)=>{
    response.send(utils.createResult(error,dbResult))
    })
})

router.delete('/deleteNote',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))
 
    const noteId = request.body.noteId
    
    const statement = `delete from note where noteId = ${noteId}`
    
    db.query(statement,(error,dbResult)=>{
        response.send(utils.createResult(error,dbResult))
        })

})

//the exported router can be imported and added into the server
module.exports = router