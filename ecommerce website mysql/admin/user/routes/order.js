const express = require("express");
const db = require("../../db");
const config = require("../../config");
const utils = require("../../utils");
const crypto = require("crypto-js");
const mailer = require("../../mailer");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

const router = express.Router();

//--------------------------------
//          POST
//--------------------------------
router.post('/order',(request,response)=>{
       const {totalAmount,tax,paymentType,paymentStatus,products} = request.body
       let statementOrder = `insert into userOrder (totalAmount, tax, paymentType, paymentStatus, deliveryStatus,userId) values (
        '${totalAmount}','${tax}','${paymentType}','${paymentStatus}','pending',${request.userId}
       )`
        db.query(statementOrder,(error,data)=>{
         const orderId = data['insertId']
         let statementOrDerdetails = `insert into orderDetails(userId,orderId, productId,price,quantity,totalAmount)
         values `
         for (let index = 0; index < products.length; index++) {
             let product = products[index];
             if (index > 0){
                statementOrderdetails += ', ' 
             }
             statementOrDerdetails += `(${request.userId},${orderId}, ${product['productId']},${product['quantity']},${product['price']},${product['totalAmount']})`
         }
         db.query(statementOrDerdetails,(error,data)=>{
            response.send(`order placed`)
         })
         
        })
    })






module.exports = router