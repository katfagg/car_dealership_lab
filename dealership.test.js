const car = require("./car");
const dealership = require("./dealership");

test("can count stock", ()=>{

    let dealership1 = new dealership("Kat's Dealership", 5,[]);
    dealership1.addCarToStock(new car("Ford", 20000, "V6"))
    expect(dealership.prototype.countCars).toBe(1);


// test("can add car to stock", ()=>{
// })

// test("can return array of manufacturers", ()=>{

// })

// test("can return all cars from given manufacturer",()=>{

// })

// test("can return total stock value", ()=>{

// })