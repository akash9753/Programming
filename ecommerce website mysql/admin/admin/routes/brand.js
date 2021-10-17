const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const urlMethod = require('../../urlMethod')
const jwt = require('jsonwebtoken')

const router = express.Router()
//GET
router.get('/getAllBrand', (request, response)=>{
           console.log(urlMethod.urlMethod(request))  
           const statement = `select brandId, title, description, createdOn from brand`
           db.query(statement, (error, data)=>{
            response.send(utils.createResult(error,data))
        })
})
/*----------------------------------------------*/

//POST
router.post('/addBrand', (request, response)=>{
       console.log(urlMethod.urlMethod(request))  
       const {title, description} = request.body
       const statement = `insert into brand (title, description) 
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
    const statement = `update brand set title = '${title}', 
    description = '${description}' where brandId = ${id}`
    db.query(statement, (error, data)=>{
        response.send(utils.createResult(error,data))
    })
})
/*----------------------------------------------*/

//DELETE
router.delete('/:id', (request, response)=>{
    console.log(urlMethod.urlMethod(request))  
    const {id} = request.params
    const statement = `delete from brand where brandId = ${id}`
    db.query(statement, (error, data)=>{
        response.send(utils.createResult(error,data))
    })
})



module.exports = router