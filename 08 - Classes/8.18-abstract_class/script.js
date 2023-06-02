"use strict";
class AbstractClass {
}
class AbstractExamples extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        return `Nome: ${this.name}`;
    }
}
const person = new AbstractExamples("Emerson");
console.log(person);
console.log(person.showName());
