const Car = require('./Car.js');

describe("car", ()=>{
    test("access the properties", ()=> {
        let car = new Car("m1",0,"e1");

        expect(car.manufacturer).toBe("m1");
        expect(car.price).toBe(0);
        expect(car.engine).toBe("e1");
    })
})