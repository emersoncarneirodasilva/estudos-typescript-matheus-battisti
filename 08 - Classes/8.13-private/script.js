"use strict";
class PrivateClass {
    constructor() {
        this.name = "Private Class";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Sou privado!");
    }
    showPrivateMethodResult() {
        this.privateMethod();
    }
}
const privateName = new PrivateClass();
console.log(privateName.showName());
privateName.showPrivateMethodResult();
