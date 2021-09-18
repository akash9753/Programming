const http = require('http')

const server = http.createServer((request, response)=>{
    console.log('request recieved')
    console.log(`request : ${request.url}`)
    if(request.url == '/product'){
        if(request.method == 'GET'){
            console.log('select * from product')
            console.log(`method : ${request.method}`)
        }else if(request.method == 'POST'){
            console.log('insert into product')
            console.log(`method : ${request.method}`)
        }else if(request.method == 'PUT'){
            console.log('update product...')
            console.log(`method : ${request.method}`)
        }else if(request.method == 'DELETE'){
            console.log('delete product..')
            console.log(`method : ${request.method}`)
        }
    }
    response.end('request processed')
})

server.listen(3000, '0.0.0.0', ()=>{
    console.log(`server started on port 3000`)
})