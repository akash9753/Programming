//Created_obj_using_constructor
function Person(name, email, age){
    this.name = name
    this.email = email
    this.age = age
}

const p1 = new Person('person1', 'person1@test.com', 40)
console.log(p1)
console.log(p1 + '')

const p2 = new Person('person1', 'person1@test.com', 40)
console.log(p1)
console.log(`${p2}`)
