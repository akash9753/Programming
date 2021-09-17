function check(person){
     if(person['age'] > 25){
         return {name:[person.name], salary:[person.salary]}
     } else{
         return 
     }
}
function fun(){
    const persons = [
        { name: "akash", salary: 22444, age: 28},
        { name: "sam", salary: 30000, age: 21},
        { name: "lee", salary: 54000, age: 24}
    ]
    
    for (let i = 0; i < persons.length; i++) {
        const newpersons = check(persons[i])
        console.log(newpersons)
    }
}
fun()
function test(){
    const persons = [
        { name: "akash", salary: 22444, age: 28},
        { name: "sam", salary: 30000, age: 21},
        { name: "lee", salary: 54000, age: 24}
    ]
    const p1 = { name: "sh", salary: 22444, age: 28}
    /*for (let i = 0; i < persons.length; i++) {
        const newpersons = check(persons[i])
        console.log(newpersons)
    }*/
    persons.push(p1)
    console.log(persons)
}
test()