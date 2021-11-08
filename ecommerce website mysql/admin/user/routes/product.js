const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const urlMethod = require('../../urlMethod')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const upload = multer({dest: 'images/'})
const fs = require('fs')
const router = express.Router()


//GET
router.get('/image/:filename',(request,response)=>{
         const{filename} = request.params
         const file = fs.readFileSync(__dirname + '/../../images/' + filename)
         response.send(file)
})

router.get('/details/:id', (request, response)=>{
    const {id} = request.params
    const statement = `select p.productId, p.title, p.description, p.image,
    c.categoryId as categoryId, c.title as categoryTitle,
    b.brandId as brandId, b.title as brandTitle,
    p.price, p.image, p.isActive from product p
    
    inner join category c
    on c.categoryId = p.category
    
    inner join brand b
    on b.brandId = p.brand
    
    where p.productId = ${id}`
    //where p.isActive = 1
    db.query(statement,(error,data)=>{
        if(error){
           response.send(utils.createError(error))
        }else{
             //empty products collection
        const products = []
        //iterate over the collection and modify the structure
        for (let index = 0; index < data.length; index++) {
            const tempProduct = data[index]
            const product = {
                productId : tempProduct['productId'],
                title : tempProduct['title'],
                description : tempProduct['description'],
                price : tempProduct['price'],
                isActive: tempProduct['isActive'],
                category :{
                    categoryId:tempProduct['categoryId'],
                    title:tempProduct['categoryTitle'],
                },
                brand :{
                    brandId:tempProduct['brandId'],
                    title:tempProduct['brandTitle'],
                },
                image:tempProduct['image'],
            }
            products.push(product)
        }
        console.log(products)
        response.send(utils.createSuccess(products))
        }
    })
})


router.get('/getAllProduct', (request, response)=>{
    console.log(`inside /getAllProduct router`)
    const statement = `select p.productId, p.title, p.description, p.image,
    c.categoryId as categoryId, c.title as categoryTitle,
    b.brandId as brandId, b.title as brandTitle,
    p.price, p.image, p.isActive from product p
    
    inner join category c
    on c.categoryId = p.category
    
    inner join brand b
    on b.brandId = p.brand`
    //where p.isActive = 1
    db.query(statement,(error,data)=>{
        if(error){
           response.send(utils.createError(error))
        }else{
             //empty products collection
        const products = []
        //iterate over the collection and modify the structure
        for (let index = 0; index < data.length; index++) {
            const tempProduct = data[index]
            const product = {
                productId : tempProduct['productId'],
                title : tempProduct['title'],
                description : tempProduct['description'],
                price : tempProduct['price'],
                isActive: tempProduct['isActive'],
                category :{
                    id:tempProduct['categoryId'],
                    title:tempProduct['categoryTitle'],
                },
                brand :{
                    id:tempProduct['brandId'],
                    title:tempProduct['brandTitle'],
                },
                image:tempProduct['image'],
            }
            products.push(product)
        }
        console.log(products)
        response.send(utils.createSuccess(products))
        }
    })
})
/*----------------------------------------------*/













module.exports = router