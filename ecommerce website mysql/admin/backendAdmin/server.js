const express = require('express')
const morgan = require('morgan')

const userRouter = require('./routes/user') 
const brandRouter = require('./routes/brand') 
const categoryRouter = require('./routes/category') 
const orderRouter = require('./routes/order') 
const productRouter = require('./routes/product') 
const reviewRouter = require('./routes/review') 

const app = express()
app.use(express.json())
app.use(morgan('combined'))


app.use('/user',userRouter)
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