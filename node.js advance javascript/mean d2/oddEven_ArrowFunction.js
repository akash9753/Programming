function isOdd(number) {return number % 2 !== 0}
function isEven(number) {return number % 2 == 0}
function square(number) {return number*number}
function cube(number) {return number*number*number}

function function1 () {
   const numbers = [1,2,3,4,5,6,7,8,9,10]

   const odds = numbers.filter(isOdd)
   const squares = odds.map(square)

   const evens = numbers.filter(isEven)
   const cubes = evens.map(cube)

   console.log(squares)
   console.log(cubes)
    
}
//function1 ()



function function2 () {
   const numbers = [1,2,3,4,5,6,7,8,9,10]

   const odds = numbers.filter( (number) => {
    return number % 2 !== 0
   })
   const squares = odds.map( (number) => {
    return number*number
   })

   const evens = numbers.filter( (number) => {
    return number % 2 == 0
   })
   const cubes = evens.map( (number) =>{
    return number*number*number
   })

   console.log(squares)
   console.log(cubes)
    
}
function2 ()