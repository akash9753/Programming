const express = require('express')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const userRouter = require('./user/routes/user') 
const orderRouter = require('./user/routes/order')
const productRouter = require('./user/routes/product')

const app = express()
app.use(cors('*'))
app.use(express.json())
app.use(morgan('combined'))

//swagger init
const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:'Amazon Server user pannel',
            version:'1.0.0',
            description:'this is amazon server'
        },
    },
    apis:['./user/routes/*.js']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)
app.use('/api-docs' , swaggerUi.serve, swaggerUi.setup(swaggerSpec))


//add a middleware for getting the id from token
function getUserId(request,response,next){
    console.log('------------------------------------------------- ')
    console.log('-----------------New Request--------------------- ')
    console.log('------------------------------------------------- ')
    console.log(`URL : ${request.url}`)
    console.log(`METHOD : ${request.method}`)
    
    if(request.url == '/user/signin' || 
    request.url == '/user/signup'  ||
    request.url.startsWith('/user/activate')||
    request.url == '/'||
    request.url == '/favicon.ico'||
    request.url.startsWith('/product/image/')||
    request.url.startsWith('/user/forget-password')||
    request.url == '/logo.png'){
        //do not check for token
        next()
    }else{
    try{
        const token = request.headers['token']
        console.log(`token : ${token}`)
        const data = jwt.verify(token, config.secret) 
        console.log(`getUserId config.secret : ${config.secret}`)
        console.log(`getUserId data.userId : ${data.userId}`)
        // add a new key named userId with logged in user's id
        request.userId = data['userId']
        console.log('------------------------------------------------- ')
        //go to actual route
        next()
      }catch(ex){
          response.status(401)
          response.send(`protected API`)   
      }
}
}
app.use(getUserId)

//required to send the static files in directory named images
app.use(express.static('images/'))

//default router
app.use('/user',userRouter)
app.use('/order',orderRouter)
app.use('/product',productRouter)

//default route
app.get('/',(request,response)=>{
    response.send('welcome to our application')
})

app.listen(4000,'0.0.0.0',()=>{
    console.log('server started on port 4000')
})