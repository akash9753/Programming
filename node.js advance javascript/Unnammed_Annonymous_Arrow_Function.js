function function1(){
    console.log("inside function 1")
}
//function1()

const myFunction1 = function1
//myFunction1()
/*-------------------------------------*/
//function alias
//unnamed/anonymous function
const myFunction2 = function (){
    console.log("inside function 2")
}
myFunction2()
/*---------------------------------------*/
//Arrow function
const myFunction2 = () =>{
    console.log("inside function 2")
}
//myFunction2()
/*---------------------------------------*/
function square(number) {
    return number*number
}
/*--------------------------*/
const square = function(number){
    console.log(`square of a ${number} = ${number * number}`) 
}
square(2)
square(3)
square(4)
/*----------------------------------*/
const cube = (number) =>{
    console.log(`square of a ${number} = ${number * number}`) 
}
cube(2)
cube(3)
cube(4)
/*---------------------------------*/