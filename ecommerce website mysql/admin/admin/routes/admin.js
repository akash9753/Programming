const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const urlMethod = require('../../urlMethod')
const jwt = require('jsonwebtoken')

const router = express.Router()


//GET
router.get('/profile', (request, response)=>{
          console.log(urlMethod.urlMethod(request))
          const statement = `select firstName, lastName, email, mobile, gender, dateOfBirth,address,city,zip,
          state,country,createdOn from admin where adminId = '${request.adminId}'`
          db.query(statement, (error, data)=>{
          response.send(utils.createResult(error,data))    
          })
        })
    
router.get('/getAllAdminProfile', (request, response)=>{
            console.log(urlMethod.urlMethod(request))
            const statement = `select firstName, lastName, email, mobile, gender, dateOfBirth,address,city,zip,
            state,country,createdOn from admin`
            db.query(statement, (error, data)=>{
            response.send(utils.createResult(error,data))    
            })
        })    
/*----------------------------------------------*/

//POST


/**
 * @swagger
 * /admin/signup:
 *   post:
 *     description: for signing up an adminastrator.
 *     produces:
 *        - application/json
 *     parameters :
 *        - name : firstName
 *          decription : firstName of user
 *          in : formData
 *          required : true
 *          type : string
 *        - name : lastName
 *          decription : lastName of user
 *          in : formData
 *          required : true
 *          type : string 
 *        - name : password
 *          decription : password of user
 *          in : formData
 *          required : true
 *          type : string 
 *        - name : email
 *          decription : email for adminuser used fro authentcation
 *          in : formData
 *          required : true
 *          type : string 
 *     responses :
 *      200 : 
 *       description : successful message
 * 
 */   
router.post('/signup', (request, response)=>{
      console.log(urlMethod.urlMethod(request))
      const {firstName, lastName, email, password, mobile, gender, dateOfBirth,address,city,zip,state,country} = request.body
      const encryptedPassword = crypto.SHA256(password)
      const statement = `insert into admin (firstName, lastName, email, password, mobile, gender, dateOfBirth, address, city, zip, state, country) values (
      '${firstName}','${lastName}','${email}','${encryptedPassword}','${mobile}','${gender}','${dateOfBirth}','${address}','${city}','${zip}','${state}','${country}')`
      db.query(statement, (error, data)=>{
          console.log('statement excecuted')
          response.send(utils.createResult(error,data))
      })
})
/*----------------------------------------------*/
/**
 * @swagger
 * /admin/signin:
 *   get:
 *     description: for signing up an adminastrator.
 *     produces:
 *        - application/json
 *     parameters :
 *        
 *        - name : password
 *          decription : password of user
 *          in : formData
 *          required : true
 *          type : string 
 *        - name : email
 *          decription : email for adminuser used fro authentcation
 *          in : formData
 *          required : true
 *          type : string 
 *     responses :
 *      200 : 
 *       description : successful message
 * 
 */  
router.post('/signin', (request, response)=>{
    try{
    console.log(urlMethod.urlMethod(request))
    const {email, password } = request.body
    const statement = `select adminId, firstName, lastName from admin 
    where email = '${email}' and password = '${crypto.SHA256(password)}'`
    console.log(crypto.SHA256(password))
    db.query(statement, (error, admins)=>{
        if(error){
            response.send({status : 'error', error: error}) 
        }else{
            if(admins.length ==0){
                console.log(admins)
                response.send({status : 'error', error: 'user does not exist'}) 
            }else{
              admin = admins[0]
              const token = jwt.sign({adminId: admin['adminId']}, config.secret)
                  console.log(config.secret)
                  response.send(utils.createResult(error,{
                  
                  firstName : admin['firstName'],
                  lastName : admin['lastName'],
                  token : token
              }))
            }
        }
     })
    }catch(ex){
        response.send(`Error in your code`)
    }
})

/*----------------------------------------------*/
//PUT
router.put('/', (request, response)=>{

})
/*----------------------------------------------*/

//DELETE
router.delete('/', (request, response)=>{

})



module.exports = router