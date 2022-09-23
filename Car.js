function Car {
    constructor(manufacturer, price, engine){
        this.manufacturer = manufacturer
        this.price = price
        this.engine = engine
    }
}

module.exports = Car;

// const Car = function(man, price,engine)
//JS is dynamic, doesn't have concept of private property. 