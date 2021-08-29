const express = require('express')
const mongojs = require('mongojs')
const utils = require('../utils')

const db = mongojs('classwork',['emp'])
const router = express.Router()

router.get('/',(request,response)=>{
    db.emp.find({},(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,response)=>{
 const {ename,job,mgr,sal,deptno} = request.body
 db.emp.insert({
     ename: ename,
     job: job,
     mgr: mgr,
     sal: sal,
     deptno: deptno
 },(error,data)=>{
     response.send(utils.createResult(error,data))
 })
})

router.put('/',(request,response)=>{

})

router.delete('/',(request,response)=>{

})

module.exports = router