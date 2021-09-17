function add(p1,p2){
    const result = p1 + p2
    console.log(`addition = ${result}`)
}
function multiply(p1,p2){
    const result = p1 * p2
    console.log(`multiply = ${result}`)
}
function substraction(p1,p2){
    const result = p1 - p2
    console.log(`substraction = ${result}`)
}
function division(p1,p2){
    const result = p1 / p2
    console.log(`division = ${result}`)
}
/*add(4,2)
division(1,0)
multiply(8,2)
substraction(8,-9)*/

module.exports = {
    add:add,
    division:division,
    substraction:substraction,
    multiply:multiply
}

//module.exports = add
//module.exports = multiply
//module.exports = substraction
//module.exports = division
console.log(module)
    
