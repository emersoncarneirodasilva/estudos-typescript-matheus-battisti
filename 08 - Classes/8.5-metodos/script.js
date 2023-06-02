"use strict";
class Dwarf {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return "Hey Stranger!";
    }
    greeting2() {
        return "Hey stranger, let's drink!";
    }
}
const gorrbann = new Dwarf("Gorrbann", 457);
console.log(gorrbann);
console.log(`Nome: ${gorrbann.name}`);
console.log(`Idade: ${gorrbann.age}`);
console.log(gorrbann.greeting2());
const ardin = new Dwarf("Ardin", 752);
console.log(ardin);
console.log(`Nome: ${ardin.name}`);
console.log(`Idade: ${ardin.age}`);
console.log(ardin.greeting());
