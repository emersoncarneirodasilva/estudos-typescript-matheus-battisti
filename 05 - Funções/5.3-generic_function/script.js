"use strict";
function firstElement(array) {
    return array[1];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["Emerson", "Raiane", "Maria", "Paulo", "Pedro"]));
/*-------------------------------------------*/
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Emerson" }, { age: 35, job: "Programmer" });
console.log(newObject);
