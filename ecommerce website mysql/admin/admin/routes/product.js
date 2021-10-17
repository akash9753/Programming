const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const urlMethod = require('../../urlMethod')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const upload = multer({dest: 'images/'})

const router = express.Router()


//GET
router.get('/getAllProduct', (request, response)=>{
    const statement = `select p.productId, p.title, p.description, 
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
                id : tempProduct['productId'],
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
                }
            }
            products.push(product)
        }
        response.send(utils.createSuccess(products))
        }
    })
})
/*----------------------------------------------*/

router.post('/upload-image/:productId', upload.single('image'), (request, response)=>{
    const {productId} = request.params
    console.log(request.file)
    const fileName = request.file.filename
    const statement = `update product set image = '${fileName}' where 
    productId = ${productId}`
    db.query(statement,(error,data)=>{
       response.send(utils.createResult(error,data))
    })
    //response.send(request.file)
})

//POST
router.post('/create', (request, response)=>{
    const {title,description,category,brand,price} = request.body
    const statement = `insert into product (title,description,category,brand,price) values
    ('${title}','${description}','${category}','${brand}','${price}')`
    db.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})
/*----------------------------------------------*/

//PUT
router.put('/:id', (request, response)=>{
    const {id} = request.params
    const {title,description,category,brand,price} = request.body
    const statement = `update product set title = '${title}',
    description = '${description}',category = '${category}',brand = '${brand}',
    price = '${price}' where productId = '${id}'`
    db.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})

router.put('/update-status/:id/:isActive' , (request, response)=>{
    const {id, isActive} = request.params
    const statement = `update product set isActive = '${isActive}'
    where productId = '${id}'`
    db.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})
/*----------------------------------------------*/

//DELETE
router.delete('/:id', (request, response)=>{
    const {id} = request.params
    const statement = `delete from product where productId = '${id}'`
    db.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})



module.exports = router