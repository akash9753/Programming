const express = require('express')

const db = require('../db')
const utils = require('../utils')
const jwt = require('jsonwebtoken')
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

 router.get('/getNotebyUserId',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    const token = request.headers['token']
    console.log(token)
    try{
      const data = jwt.verify(token,'123456789')
      const statement = `select * from note where userId = ${data.id}`
      db.query(statement,(error, dbResult)=>{
        response.send(utils.createResult(error,dbResult))
      })
    }catch(ex){
     response.status(401)
     response.send('u r not allowed to access this API')
    }
  })

 router.get('/getNotebyNoteId',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
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