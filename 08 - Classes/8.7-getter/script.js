"use strict";
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `O nome completo é: ${this.name} ${this.surname}`;
    }
}
const emerson = new Person("Emerson", "Carneiro da Silva");
console.log(emerson);
console.log(`Nome: ${emerson.name}`);
console.log(`Sobrenome: ${emerson.surname}`);
console.log(emerson.fullName);
const raiane = new Person("Raiane", "do Nascimento da Silva");
console.log(raiane);
console.log(`Nome: ${raiane.name}`);
console.log(`Sobrenome: ${raiane.surname}`);
console.log(raiane.fullName);
