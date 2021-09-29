const express = require('express')
const urlMethod = require('../urlAndMethod')

 const router = express.Router()

 router.get('/getAllNotes',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
        response.send('/getAllNotes')
 })

 router.post('/createNote',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    response.send()
})

router.put('/updateNote',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    response.send()
})

router.delete('/deleteNote',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    response.send()
})


module.exports = router