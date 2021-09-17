//Created object using function
function printDetails(){
    console.log(`name:${this.name}`)
    console.log(`age:${this.age}`)
    console.log(`email:${this.email}`)
}

function function3(){
    const p1 = new Object()
    p1.name = 'person'
    p1.email= 'a@gmail.com'
    p1.age = 40
    p1.printDetails = printDetails
    console.log(p1)
    p1.printDetails()

    const p2 = new Object()
    p2.name = 'person'
    p2.email= 'a@gmail.com'
    p2.age = 40
    p2.printDetails = printDetails
    console.log(p2)
    p1.printDetails()
}
function3()