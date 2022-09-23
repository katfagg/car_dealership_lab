//Task 2
const car = require("./car.js");

test("can access car properties", ()=>{

    let car1 = new car("Tesla", 70000, "Electric")
    expect((car1.manufacturer)===("Tesla"));
    expect((car1.price)===(70000));
    expect((car1.engine)===("Electric"));
})

