const express = require('express')
const mysql = require('mysql')

const app = express()

//-----------------------------
//----products routes
//-----------------------------
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

//-----------------------------
//----user routes
//-----------------------------

app.listen(3000, '0.0.0.0',()=>{
    console.log('server started at port 3000')
})