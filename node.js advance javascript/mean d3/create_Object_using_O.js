//using Object to create an object
function function1(){
    const p1 = new Object()
    console.log(p1)
}
//function1()

function function2(){
    const p1 = new Object()

    p1.name = 'person'
    p1.email= 'a@gmail.com'
    p1.age = 40
    console.log(p1)

    const m1 = new Object()

    m1.name = 'mm'
    m1.email= 'm@gmail.com'
    m1.age = 40
    console.log(m1)

    const c1 = new Object()

    c1['name'] = 'cc'
    c1['email']= 'c@gmail.com'
    c1['age'] = 40
    console.log(c1)
}
function2()