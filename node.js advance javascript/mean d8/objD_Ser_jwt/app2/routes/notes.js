const express = require('express')

const db = require('../db')
const utils = require('../utils')
const urlMethod = require('../urlAndMethod')

 const router = express.Router()
//getNotebyUserId
 router.get('/getAllNotes',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    const statements = `select * from note`
    db.query(statements,(error, dbResult)=>{
      response.send(utils.createResult(error,dbResult))
    })
        
 })

 router.get('/getNotebyUserId/:userId',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    const { userId} = request.params
    const statements = `select * from note where userId = ${userId} `
    db.query(statements,(error, dbResult)=>{
      response.send(utils.createResult(error,dbResult))
    })
        
 })

 router.get('/getNotebyNoteId/:noteId',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    const { noteId} = request.params
    const statements = `select * from note where noteId = ${noteId}`
    db.query(statements,(error, dbResult)=>{
      response.send(utils.createResult(error,dbResult))
    })
        
 })

 router.post('/createNoteByUserId/:userId',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    const { userId} = request.params
    const {contents} = request.body
    const statements = `insert into note (contents , userId) values ('${contents}','${userId}')`
    db.query(statements,(error, dbResult)=>{
      response.send(utils.createResult(error,dbResult))
    })

        
 })

router.put('/updateNoteByNoteId/:noteId',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    const { noteId} = request.params
    const {contents} = request.body
    const statements = `update note set contents = '${contents}' where noteId = ${noteId}`
    db.query(statements,(error, dbResult)=>{
      response.send(utils.createResult(error,dbResult))
    })
})

router.delete('/deleteNoteByNoteId/:noteId',(request,response)=>{ 
    console.log(urlMethod.urlAndMethod(request))
    const { noteId} = request.params
    const statements = `delete from note where noteId = ${noteId}`
    db.query(statements,(error, dbResult)=>{
      response.send(utils.createResult(error,dbResult))
    })
})

router.delete('/deleteAllNotes',(request,response)=>{ 
    console.log(urlMethod.urlAndMethod(request))
    const statements = `TRUNCATE TABLE note;`
    db.query(statements,(error, dbResult)=>{
      response.send(utils.createResult(error,dbResult))
    })
})



module.exports = router