"use strict";
function somaDefault(num1, num2 = 0) {
    return num1 + num2;
}
console.log(somaDefault(5));
console.log(somaDefault(5, 7));
