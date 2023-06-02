"use strict";
function biggestNumber(num1, num2) {
    let biggest;
    if (Number(num1) > Number(num2)) {
        biggest = num1;
    }
    else {
        biggest = num2;
    }
    return biggest;
}
console.log(biggestNumber(5, 7));
console.log(biggestNumber("12", "31"));
// console.log(biggestNumber(2, "1"));
