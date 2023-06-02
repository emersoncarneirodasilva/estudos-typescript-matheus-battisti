"use strict";
class Animal {
    constructor(name, raca) {
        this.name = name;
        this.raca = raca;
    }
}
class Wild extends Animal {
    constructor(name, raca, claws) {
        super(name, raca);
        this.claws = claws;
    }
}
const gato = new Animal("Litte Black", "Siâmes");
console.log(gato);
const tigre = new Wild("Big Cat", "Tiger", true);
console.log(tigre);
