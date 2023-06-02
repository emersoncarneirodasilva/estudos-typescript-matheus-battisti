"use strict";
class Car {
    constructor(name, brand, dors, color, convertible) {
        this.wheels = 4;
        this.name = name;
        this.brand = brand;
        this.dors = dors;
        this.color = color;
        this.convertible = convertible;
    }
}
const car1 = new Car("New Beatle", "Volkswagen", 2, "White", false);
console.log(car1);
const car2 = new Car("Mustang", "Ford", 2, "gray", false);
console.log(car2);
const car3 = new Car("SLK", "Mercedes-Benz", 2, "black", true);
console.log(car3);
