"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("Emerson", 35);
console.log(person1);
console.log(`O nome do usuário é: ${person1.name}`);
console.log(`A idade do usuário é: ${person1.age} anos`);
const person2 = new Person("Raiane", 32);
console.log(person2);
console.log(`O nome do usuário é: ${person2.name}`);
console.log(`A idade do usuário é: ${person2.age} anos`);
