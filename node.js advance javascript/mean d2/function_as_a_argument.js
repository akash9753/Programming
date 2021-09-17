function add(p1, p2){
    console.log(`addition = ${p1+p2}`)
}

function execute(func){
    console.log('inside execute')
    func(10,20)
}
execute(add)