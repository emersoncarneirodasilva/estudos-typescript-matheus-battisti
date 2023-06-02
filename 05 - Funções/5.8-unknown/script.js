"use strict";
function doSomething(x) {
    if (Array.isArray(x)) {
        return x[2];
    }
    else if (typeof x === "object") {
        return x;
    }
    return "Você não enviou nem um array nem um objeto";
}
console.log(doSomething(true));
console.log(doSomething({ name: "Emerson", age: 35 }));
console.log(doSomething([1, 2, 3, 4]));
console.log(doSomething(145));
console.log(doSomething("Raiane"));
