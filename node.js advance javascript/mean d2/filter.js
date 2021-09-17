function canAfford(car){
    return car['price'] < 10
}

function function7(){
    const cars = [
        {model:"i20", price:7.5, company:"hundayi", color:"space grey"},
        {model:"nano", price:2.5, company:"tata", color:"yellow"},
        {model:"x5", price:35.5, company:"bmw", color:"dark blue"}
    ]
    const affordableCars = cars.filter(canAfford)
    console.log(cars)
    console.log(affordableCars)
}
function7()