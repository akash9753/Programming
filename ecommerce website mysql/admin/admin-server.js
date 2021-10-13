const express = require('express')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const config = require('./config')

const adminRouter = require('./admin/routes/admin') 
const brandRouter = require('./admin/routes/brand') 
const categoryRouter = require('./admin/routes/category') 
const orderRouter = require('./admin/routes/order') 
const productRouter = require('./admin/routes/product') 
const reviewRouter = require('./admin/routes/review') 

const app = express()
app.use(express.json())
//app.use(morgan('combined'))


//add a middleware for getting the id from token
function getAdminId(request,response,next){
    console.log('------------------------------------------------- ')
    console.log('-----------------New Request--------------------- ')
    console.log('------------------------------------------------- ')
    console.log(`URL : ${request.url}`)
    console.log(`METHOD : ${request.method}`)
    if(request.url == '/admin/signin' || request.url == '/admin/signup'){
        //do not check for token
        next()
    }else{
    try{
        const token = request.headers['token']
        console.log(`token : ${token}`)
        const data = jwt.verify(token, config.secret) 
        console.log(`getAdminId config.secret : ${config.secret}`)
        console.log(`getAdminId data.adminId : ${data.adminId}`)
        console.log('------------------------------------------------- ')
        // add a new key named userId with logged in user's id
        request.adminId = data['adminId']

        //go to actual route
        next()
      }catch(ex){
          response.status(401)
          response.send(`protected API`)   
      }
}
}
app.use(getAdminId)


app.use('/admin',adminRouter)
app.use('/brand',brandRouter)
app.use('/category',categoryRouter)
app.use('/order',orderRouter)
app.use('/product',productRouter)
app.use('/review',reviewRouter)

//default route
app.get('/',(request,response)=>{
    response.send('welcome to our application')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})