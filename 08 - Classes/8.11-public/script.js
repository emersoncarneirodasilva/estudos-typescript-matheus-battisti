"use strict";
class A {
    constructor() {
        this.x = 20;
    }
}
class B extends A {
}
const aIntance = new A();
console.log("Instâcia de A:", aIntance.x);
const bIntance = new B();
console.log("Instância de B:", bIntance.x);
