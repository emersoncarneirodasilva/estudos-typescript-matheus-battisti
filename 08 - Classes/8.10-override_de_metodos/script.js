"use strict";
class Base {
    someMethod() {
        return "Alguma coisa!";
    }
}
class Nova extends Base {
    someMethod() {
        return "Outra coisa!";
    }
}
const myNewClass = new Nova();
console.log(myNewClass.someMethod());
