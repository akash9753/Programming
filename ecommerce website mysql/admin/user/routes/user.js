const express = require('express')
const db = require('../../db')
const config = require('../../config')
const utils = require('../../utils')
const crypto = require('crypto-js')
const mailer = require('../../mailer')
const router = express.Router()
const uuid = require('uuid')
const fs = require('fs')
const path = require('path')
//------------------------------------
//                GET
//------------------------------------
router.get('/activate/:token', (request,response)=>{
    const {token} = request.params
    const statement = `update user set active = 1, activationToken = '' where activationToken = '${token}'`
    db.query(statement,(error,data)=>{
        const htmlPath = path.join(__dirname,'/../template/activation_result.html')
        const body = '' + fs.readFileSync(htmlPath)
        response.header('Content-Type','text/html')
        response.send(body)
    })
 })

//------------------------------------
//                POST
//------------------------------------
router.post('/signup',(request,response)=>{
 const {firstName, lastName, email, password} = request.body
 console.log(request.body)
 const activationToken = uuid.v4()
 const activationLink = `http://localhost:4000/user/activate/${activationToken}`
const htmlPath = path.join(__dirname, '/../template/send_activation_link.html')
console.log(htmlPath)
 let body = '' + fs.readFileSync(htmlPath)
body = body.replace('{firstName}', firstName)
body = body.replace('{activationLink}',activationLink)

 console.log(`activation token = ${activationToken}`)
 console.log(`activation link = ${activationLink}`)
 console.log(`body = ${body}`)
 
 

 const statement = `insert into user (firstName, lastName, email, password,activationToken) values 
('${firstName}','${lastName}','${email}','${crypto.SHA256(password)}','${activationToken}')`
console.log(statement)
db.query(statement,(error, data)=>{
    console.log(data)

    console.log(`inside utils.createResult  : ${data}`)
    mailer.sendEmail(email,'welcome to jabalpurwala.com',body,(error,info)=>{
        console.log(`Error for mail :  ${error}`)
        console.log(info)
    response.send(utils.createResult(error,data))
   })
  })
})



//------------------------------------
//                PUT
//------------------------------------


//------------------------------------
//                DELETE
//------------------------------------

module.exports = router

 /*
 const activationLink = `http://localhost:4000/activation/${activationToken}`
 const body = `<h1>Welcome to mystore</h1>
 <p>Hello ${firstName}</p>
 <p></p>
 <p>Please activate your account by visiting following url</p>
 <p><a herf="${activationLink}">activate</a></p>
 <p>Best Regards</p>
 ` */

 /*mailer.sendEmail(email,'welcome to jabalpurwala.com','<p>hello</p>',(error,info)=>{
    console.log(`Error for mail :  ${error}`)
    console.log(`mailInfo :  ${info}`)*/ 

 /*
 router.post('/signup',(request,response)=>{
 const {firstName, lastName, email, password} = request.body
 console.log(request.body)
 const activationToken = uuid.v4()
 const activationLink = `http://localhost:4000/user/activate/${activationToken}`
 const body = `<h1>Welcome to mystore</h1>
 <p>Hello ${firstName}</p>
 <p></p>
 <p>Please activate your account by visiting following url</p>
 <p><a href="${activationLink}">activate</a></p>
 <p>Best Regards</p>
 `
 const statement = `insert into user (firstName, lastName, email, password,activationToken) values 
('${firstName}','${lastName}','${email}','${crypto.SHA256(password)}','${activationToken}')`
console.log(statement)
db.query(statement,(error, data)=>{
    console.log(data)

    console.log(`inside utils.createResult  : ${data}`)
    mailer.sendEmail(email,'welcome to jabalpurwala.com',body,(error,info)=>{
        console.log(`Error for mail :  ${error}`)
        console.log(`mailInfo :  ${info}`)
    response.send(utils.createResult(error,data))
   })
  })
})
  */