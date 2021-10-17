const express = require('express')
const db = require('../../db')
const config = require('../../config')
const utils = require('../../utils')
const crypto = require('crypto-js')

const router = express.Router()

//------------------------------------
//                GET
//------------------------------------
router.post('/signup',(request,response)=>{
          const {firstName, lastName, email, password} = request.body
          const statement = `insert into user (firstName, lastName, email, password) values 
          ('${firstName}','${lastName}','${email}','${crypto.SHA256(password)}')`
          db.query(statement,(error, data)=>{
           response.send(utils.createResult(error,data))
          })
})

//------------------------------------
//                POST
//------------------------------------


//------------------------------------
//                PUT
//------------------------------------


//------------------------------------
//                DELETE
//------------------------------------

module.exports = router