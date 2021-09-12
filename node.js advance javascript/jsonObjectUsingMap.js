function convertCar(car){
    return {model:car["model"], company: car["company"]}
}

function function7(){
    const cars = [
        {model:"i20", price:7.5, company:"hundayi", color:"space grey"},
        {model:"nano", price:7.5, company:"tata", color:"yellow"},
        {model:"x5", price:35.5, company:"bmw", color:"dark blue"}
    ]
    const newCars = cars.map(convertCar)
    console.log(cars)
    console.log(newCars)
}
function7()

