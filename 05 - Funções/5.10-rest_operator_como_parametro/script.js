"use strict";
function sumAll(...num) {
    return num.reduce((sum, val) => sum + val);
}
console.log(sumAll(4, 6, 7, 9));
console.log(sumAll(1123, 6124124, 742344, 944234));
// Obs: Lembrar que o spred retorna um array, por isso seu tipo é number[]
