function fun(){
    const persons = [
        { name: "akash patel", salary: 22444, age: 28},
        { name: "sam", salary: 30000, age: 21},
        { name: "lee", salary: 54000, age: 24}
    ]
    console.log(persons.length)
    
    for (let i = 0; i < persons.length; i++) {
        if(persons[i].age > 25){
        const newPersons = persons[i]
        console.log({name: [newPersons.name], salary:[newPersons.salary]})
        }
   }
}
fun()