const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const urlMethod = require('../../urlMethod')
const jwt = require('jsonwebtoken')

const router = express.Router()
//GET
router.get('/getAllCategory', (request, response)=>{
           console.log(urlMethod.urlMethod(request))  
           const statement = `select categoryId, title, description, createdOn from category`
           db.query(statement, (error, data)=>{
           response.send(utils.createResult(error,data))
        })
})
/*----------------------------------------------*/

//POST
router.post('/addCategory', (request, response)=>{
       console.log(urlMethod.urlMethod(request))  
       const {title, description} = request.body
       const statement = `insert into category (title, description) 
       values ('${title}','${description}')`
       db.query(statement, (error, data)=>{
           response.send(utils.createResult(error,data))
       })
})
/*----------------------------------------------*/

//PUT
router.put('/:id', (request, response)=>{
    console.log(urlMethod.urlMethod(request))  
    const {id} = request.params
    const {title, description} = request.body
    const statement = `update category set title = '${title}', 
    description = '${description}' where categoryId = ${id}`
    db.query(statement, (error, data)=>{
        response.send(utils.createResult(error,data))
    })
})
/*----------------------------------------------*/

//DELETE
router.delete('/:id', (request, response)=>{
    console.log(urlMethod.urlMethod(request))  
    const {id} = request.params
    const statement = `delete from category where categoryId = ${id}`
    db.query(statement, (error, data)=>{
        response.send(utils.createResult(error,data))
    })
})
module.exports = router