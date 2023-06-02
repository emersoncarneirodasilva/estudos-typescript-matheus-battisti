"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function a() {
    return function (target, property, descriptior) {
        console.log("Executou a");
        console.log(target);
        console.log(property);
        console.log(descriptior);
    };
}
function b() {
    return function (target, property, descriptior) {
        console.log("Executou b");
        console.log(target);
        console.log(property);
        console.log(descriptior);
    };
}
function c() {
    return function (target, property, descriptior) {
        console.log("Executou c");
        console.log(target);
        console.log(property);
        console.log(descriptior);
    };
}
class MultipleClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleClass.prototype, "testing", null);
const mutiple = new MultipleClass();
mutiple.testing();
