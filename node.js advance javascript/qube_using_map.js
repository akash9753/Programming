function square(n){
    return n*n*n
}

function mapDemo(){
    const son = [1,2,3,4,5,6,7,8,9,10]
    const squares = son.map(square)
    console.log(son)
    console.log(squares)
}
mapDemo()