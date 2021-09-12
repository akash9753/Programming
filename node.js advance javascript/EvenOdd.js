function isEven(n){
    return n % 2 == 0
}
function isOdd(n){
    return n % 2 != 0
}

function function1(){
    const n = [1,2,3,4,5,6,7,8,9,10]
    const evens = []
    for(let i=0; i<n.length; i++){
        const tv = n[i]
        if(isEven(tv)){
            evens.push(tv)
        }
    }
    console.log(n)
    console.log(evens)
}
//function1()

function f5(){
    const n = [1,2,3,4,5,6,7,8,9,10]
    //const evens = n.map(isEven)
    const evens = n.filter(isEven)
    const odds = n.filter(isOdd)
    console.log(n)
    console.log(evens)
    console.log(odds)
}
f5()