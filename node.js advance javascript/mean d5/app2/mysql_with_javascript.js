const { table } = require('console')
const mysql= require('mysql')

function getProducts(){
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123456789',
        database : 'pm',
        port : 3306
    })
    connection.connect()

    const statement = `select empno, firstname,lastname,sal,deptno,job,mgr from emp`

    connection.query(statement,(error, data)=>{
      console.log(`error: ${error}`)
      //console.log(data)
      /*for (let index = 0; index < data.length; index++) {
          const row = data[index];
          console.log(`empno => ${row['empno']}`)
          console.log(`firstname => ${row['firstname']}`)
          console.log(`lastname => ${row['lastname']}`)
          console.log(`sal => ${row['sal']}`)
          console.log(`deptno => ${row['deptno']}`)
          console.log(`mgr => ${row['mgr']}`)
          console.log(`---------------`)
    

      }*/
    console.table(data)
      connection.end()
    })
}
//getProducts()

function createProduct(empno,firstname,lastname,sal,deptno,job,mgr){
  const connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : '123456789',
      database : 'pm',
      port : 3306
  })
  connection.connect()

  const statement = `insert into emp (empno,firstname,lastname,sal,deptno,job,mgr) values ('${empno}','${firstname}','${lastname}','${sal}','${deptno}','${job}','${mgr}')`

  connection.query(statement,(error, data)=>{
    console.log(`error: ${error}`)
    console.log(data)
    
  
  })
}
//createProduct(8,'akash','patel',1000,1,'M',4)