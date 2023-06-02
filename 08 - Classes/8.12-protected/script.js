"use strict";
class C {
    constructor() {
        this.x = 20;
    }
}
class D extends C {
    showX() {
        return `x: ${this.x}`;
    }
}
const dInstance = new D();
// console.log(dInstance.x);
console.log(dInstance.showX());
// A class que tem protect só pode ser acessível por um método
// const cInstance = new C();
// console.log(cInstance.x);
