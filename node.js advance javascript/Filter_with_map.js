function canAffordableCars(car){
    return car['price'] < 10
}
function canNotaffordableCars(car){
    return car['price'] > 10
}
function getModelCompany(car) { return {model:car['model'], company : car['company']}}
function getPrice(car) {return { price : car['price']}}
function function2(){
    const cars = [
        {model:"i20", price:7.5, company:"hundayi", color:"space grey"},
        {model:"nano", price:2.5, company:"tata", color:"yellow"},
        {model:"x5", price:35.5, company:"bmw", color:"dark blue"}
    ]
  
    //get model and company of affordable cars
            const affordableCars = cars.filter(canAffordableCars)
            const newaffordableCars = affordableCars.map(getModelCompany)
            console.log(newaffordableCars)

            const nonAffordableCars = cars.filter(canNotaffordableCars)
            const newNonAffordableCars = nonAffordableCars.map(getPrice) 
            console.log(newNonAffordableCars)
    //get price of non-affordable cars
}
function2()