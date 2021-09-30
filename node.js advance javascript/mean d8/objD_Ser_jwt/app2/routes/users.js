const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const urlMethod = require('../urlAndMethod')


 const router = express.Router()

 router.post('/signup',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
    //object derefrencing
    const { firstName, lastName, email, password, mobile } = request.body
    
    const encryptpassword = crypto.SHA256(password)
    const statement = `insert into user (firstName, lastName, email, password, mobile) 
    values ('${firstName}','${lastName}','${email}','${encryptpassword}','${mobile}')`

    db.query(statement,(error,dbResult)=>{
        response.send(utils.createResult(error,dbResult))
    })
        
 })

 router.post('/signin',(request,response)=>{
    console.log(urlMethod.urlAndMethod(request))
     
    const {email , password } = request.body
    const encryptpassword = crypto.SHA256(password)
     const statement = `select userId, email,firstName, lastName, mobile from user where email = '${email}' and password = '${encryptpassword}';`

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
            const token = jwt.sign({ id:user['userId']}, '123456789')
            response.send({status:'success', data: {
                //ID : user['userId'],
                FirstName: user['firstName'],
                LastName: user['lastName'],
                Email: user['email'],
                Mobile:user['mobile'],
                token:token
            }})
            }
         }
        })
})

router.get('/profile',(request,response)=>{
    //console.log(urlMethod.urlAndMethod(request))
    //const { userId } = request.query
    //const { userId } = request.params
    //console.log(request.params)
      const token = request.headers['token']
      console.log(`token : ${token}`)
      try{
        const data = jwt.verify(token, '123456789')
        console.log(`data`)
        console.log(data)
        console.log(data.id)
        const statement = `select email,firstName, lastName, mobile from user where userId = ${data.id};`

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
      }catch(ex){
          console.log(ex)
          //unauthorized API
          response.status(401)
          response.send('u r not allowed to access this API')
      }
    })

router.put('/profile',(request,response)=>{
    response.send()
})

router.delete('/delete',(request,response)=>{
    response.send()
})

 module.exports = router