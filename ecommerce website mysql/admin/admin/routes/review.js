const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const urlMethod = require('../../urlMethod')
const jwt = require('jsonwebtoken')

const router = express.Router()


//GET
router.get('/:productId', (request, response)=>{
    const {productId} = request.params
    console.log(productId)
    const statement = `select productReviewId, userId, review, rating from productReview 
    where productId = ${productId}`
    db.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
     }) 
})
/*----------------------------------------------*/

//POST
router.post('/:productId', (request, response)=>{
     const {productId} = request.params
     const {rewiew, rating} = request.body
     const statement = `insert into productReviews (review, productId, userId, rating) values
     '${rewiew}','${productId}','${request.userId}','${rating}'`
     db.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
     }) 
    response.send()
})
/*----------------------------------------------*/

//PUT
router.put('/', (request, response)=>{

})
/*----------------------------------------------*/

//DELETE
router.delete('/:id', (request, response)=>{
    const {id} = request.params
    const statement = `delete from productReview where productReview Id = '${id}'`
    db.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})



module.exports = router