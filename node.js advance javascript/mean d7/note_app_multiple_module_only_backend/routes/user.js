const express = require('express')
const db = require('../db')
const utils = require('../utils')
const  urlAndMethod= require('../urlAndMethod')
//router is used to handel the routes
const router = express.Router()

router.get('/getAllUsers',(request,response)=>{
    const  urlAndMethod= require('../urlAndMethod')
    
})

router.post('/signin',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))

    const email = request.body.email
    const password = request.body.password

    const statement = `select * from user where email = '${email}' and password = '${password}'`
    db.query(statement,(error,users)=>{
         const result = {status : ''}
         if(users.length == 0){
          result['status'] = 'error'
          result['error'] = "user does not exist"
          //result['dbError'] = error
         }else{
          result['status'] = 'success'
          const user = users[0]
          result['data'] = {
              Id:user['id'],
              Email:user['email'],
              FirstName:user['firstName'],
              LastName:user['lastName']
          }
         }
         response.send(result)
    })
})

router.post('/signup',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))

    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const email = request.body.email
    const password = request.body.password
    const mobile = request.body.mobile
    
    const statement = `insert into user (firstName, lastName, email, password, mobile ) values('${firstName}','${lastName}','${email}','${password}','${mobile}')`
    //console.log(statement)
    
    db.query(statement,(error, dbResult) =>{
        response.send(utils.createResult(error, dbResult))
         })
})

router.put('/updateUser',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))

    

})

router.delete('/deleteUser',(request,response)=>{
    console.log(urlAndMethod.urlAndMethod(request))

    

})

//the exported router can be imported and added into the server
module.exports = router