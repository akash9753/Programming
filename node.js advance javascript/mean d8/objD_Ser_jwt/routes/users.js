const express = require('express')
const db = require('../db')
const utils = require('../utils')
const urlMethod = require('../urlAndMethod')


 const router = express.Router()

 router.post('/signup',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    //object derefrencing
    const { firstName, lastName, email, password, mobile } = request.body
        
    const statement = `insert into user (firstName, lastName, email, password, mobile) 
    values ('${firstName}','${lastName}','${email}','${password}','${mobile}')`

    db.query(statement,(error,dbResult)=>{
        response.send(utils.createResult(error,dbResult))
    })
        
 })

 router.post('/signin',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
     
    const {email , password } = request.body
     const statement = `select userId, email,firstName, lastName from user where email = '${email}' and password = '${password}';`

     db.query(statement,(error, users)=>{
         if(error){
            console.log(`--------Error----------------`)
             console.log(error)
         response.send({'status':'error', 'error': error})
         }else{
            if(users.length == 0){
                console.log(`users object length : ${users.length}`)
                console.log(`user does not exist`)
            //user does not exist
            response.send({status:'error', error: 'user does not exist'})
         }else {
            const user = users[0]
            console.log(user)
            response.send({status:'success', data: user})
            }
         }

       })
})

router.get('/profile',(request,response)=>{
    response.send()
})

router.put('/profile',(request,response)=>{
    response.send()
})

router.delete('/delete',(request,response)=>{
    response.send()
})

 module.exports = router