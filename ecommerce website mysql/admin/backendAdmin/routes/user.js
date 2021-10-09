const express = require('express')
const utils = require('../utils')
const db = require('../db')
const config = require('../config')
const crypto = require('crypto-js')
const urlMethod = require('../urlMethod')

const router = express.Router()


//GET
router.get('/', (request, response)=>{
           
})
/*----------------------------------------------*/

//POST
router.post('/signup', (request, response)=>{
      console.log(urlMethod.urlMethod(request))
      const {firstName, lastName, email, password } = request.body
      const encryptedpassword = crypto.SHA256(password)
      const statement = `inser into user (firstName, lastName, email, password) values (
      '${firstName}','${lastName}','${email}','${encryptedpassword}')`
      db.query(statement, (error, data)=>{
          console.log('statement excecuted')
          response.send(utils.createResult(error,data))
      })
      
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