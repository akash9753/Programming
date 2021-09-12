function fun(){
    const soa = [1,2,3,4,5,6,7,8,9,10]

    for(let i=0; i<soa.length; i++){
        const tv = soa[i]
        const square = tv * tv
        console.log(`square of ${soa[i]} = ${square}`)
    }
}
fun()