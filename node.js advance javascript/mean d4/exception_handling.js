const fs = require('fs')

function syncReadfile(){
    //reading the file
    console.log(`file reading started`)
    //blocking call/API
    try{
        const data = fs.readFileSync('./page.txt')
        console.log(`file reading finished`)
        console.log(`data = ${data}`)
        console.log(`bye bye`)
    } catch(ex){
        console.log(`exception:${ex} `)
    }
    //mathemetical calculation
    console.log(`performing multiplucation`)
    const result = 257894321 * 874593521
    console.log(result)
}
//syncReadfile()

function asyncReadfile(){
    console.log(`file reading started`)
    
    //starts a thread to perform the read operation
    fs.readFile('./page1.txt',(error,data)=>{
    
    //the reading is finished
    console.log(`file reading finished`)
    if(error){
    console.log(`error = ${error}`)
    }else{
    console.log(`data = ${data}`)
    }
    console.log(`bye bye`)
    })

    //mathemetical calculation
    console.log(`performing multiplucation`)
    const result = 257894321 * 874593521
    console.log(result)
}
asyncReadfile()

function function1(){
    console.log('download started')
    setTimeout(()=>{
        console.log('download finished')
    },5000)

    //mathemetical calculation
    console.log(`performing multiplucation`)
    const result = 257894321 * 874593521
    console.log(result)
}
//function1()

function myReadFile(path, func){
    // func = (error,data) => {...}
    const data = fs.readFileSync(path)
    setTimeout(()=>{
        func(null, data)
    },1000)
}
function function2(){
    console.log('reading started')
    myReadFile('./page1.txt',(error,data)=>{
          console.log(`data = ${data}`)
          console.log('reading finished')
    })
    //mathemetical calculation
    console.log(`performing multiplucation`)
    const result = 257894321 * 874593521
    console.log(result)
}
//function2()