"use strict";
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const person = new myClass("Emerson");
console.log(person);
console.log(person.name);
