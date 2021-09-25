const express = require('express')
const mysql = require('mysql')
//used to parse the request body contents
const bodyParser = require('body-parser')

const app = express()

//use body parser's json parser to parse body into json object
app.use(bodyParser.json())


app.get('/product',(request,response)=>{
    const connection = mysql.createConnection({
       host : 'localhost',
       user : 'root',
       password : '123456789',
       database : 'expmysql',
       port : 3306
    })
    connection.connect()
    
    const statement = `select * from product`

    connection.query(statement,(error,data)=>{

          connection.end()
          if(error){
          response.end(`error : ${error}`)
          }else{
          
          
          /*const string = JSON.stringify(data)
          response.setHeader('Content-Type','application/json' )
          response.end(string)*/
          data[0].title = "akash"
          response.send(data)
          console.log(`${data[0].title}`)
          console.log(data)
          
          }
    })

})
app.get('/result',(request,response)=>{
    const connection = mysql.createConnection({
       host : 'localhost',
       user : 'root',
       password : '123456789',
       database : 'result',
       port : 3306
    })
    connection.connect()
    
    const statement = `select dish,cricketer,actor,mobile from question`

    connection.query(statement,(error,data)=>{

          connection.end()
          if(error){
          response.end(`error : ${error}`)
          }else{
            const p2 = Object.values(data[0]);
            console.log(p2)
            const p3 = Object.values(data[1]);
            console.log(p3)
            let count = 0
            for(let i = 0, j = 0; i<p2.length, j<p3.length; i++,j++){
                    if(p2[i] == p3[j])
                      count++
            }
            console.log(count)
            percentage = (count/4)
            console.log(percentage)
            per = percentage*100
            console.log(`profile matching % = ${per}%`)
            const array = []
            array.push(per)
            response.send(array)
          
          
          }
    })

})

app.post('/product',(request,response)=>{
     console.log(request.body)
     

     const connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '123456789',
      database : 'expmysql',
      port : 3306
   })

   const statement = `insert into product (title, price,description, category, userId,company )
               values ('${request.body.title}',
                      '${request.body.price}',
                      '${request.body.description}',
                      '${request.body.category}',
                      '${request.body.userId}',
                      '${request.body.company}')`
                      console.log(`statement : ${statement}`)               

   connection.query(statement,(error,data)=>{

    connection.end()
    if(error){
      console.log(`error : ${error}`)
      response.send(`error : ${error}`)
    }else{
      console.log(data)
      response.send(data)
      }
})
})
app.post('/lowertoupper',(request,response)=>{
       console.log(request.body)
       console.log(request.body.string)
       let str = request.body.string
       const string = str.toUpperCase()
       let count = string.length
       console.log(string) 
       const arr = [string,count]
       response.send(arr)
})

app.put('/product',(request,response)=>{
  console.log(`body`)
  console.log(request.body)
  

  const connection = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : '123456789',
   database : 'expmysql',
   port : 3306
})

const statement = `update product 
             set title ='${request.body.title}',
                   price = '${request.body.price}',
                   description = '${request.body.description}',
                   category = '${request.body.category}',
                   userId = '${request.body.userId}',
                   company = '${request.body.company}'
                   where id = ${request.body.id}`
                   console.log(`statement : ${statement}`)               

connection.query(statement,(error,data)=>{

 connection.end()
 if(error){
   console.log(`error : ${error}`)
   response.send(`error : ${error}`)
 }else{
   console.log(data)
   response.send(data)
   }
})
})

app.delete('/product',(request,response)=>{
  console.log(`body`)
  console.log(request.body)
  

  const connection = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : '123456789',
   database : 'expmysql',
   port : 3306
})

const statement = `delete from product where id = ${request.body.id}`
                   console.log(`statement : ${statement}`)               

connection.query(statement,(error,data)=>{

 connection.end()
 if(error){
   console.log(`error : ${error}`)
   response.send(`error : ${error}`)
 }else{
   console.log(data)
   response.send(data)
   }
})
})





app.listen(3000, '0.0.0.0',()=>{
    console.log('server started at port 3000')
})