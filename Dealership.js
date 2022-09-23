const car = require("./car");

//Task 3
const dealership = function(name, maxStock, currentStock){
    this.name = name;
    this.maxStock = maxStock;
    this.currentStock = [];
}

//Task 4
dealership.prototype.countCars = function () {
    return this.currentStock.length;
}

dealership.prototype.addCarToStock = function (car) {
    if(countCars() < this.maxStock){
        this.currentStock.push(car);
    }
}

dealership.prototype.carManufacturers = function (){
    let listOfManufacturers = []
    this.currentStock.forEach(car=>{
        listOfManufacturers.push(car.manufacturer)
    }) 
    return listOfManufacturers
}

dealership.prototype.carsByManufacturer = function(manufacturer){
    return this.currentStock.filter(manufacturer);
}

dealership.prototype.totalStockValue = function() {
    return this.cars.reduce((total, car) => total += car.price)
}

module.exports = dealership;