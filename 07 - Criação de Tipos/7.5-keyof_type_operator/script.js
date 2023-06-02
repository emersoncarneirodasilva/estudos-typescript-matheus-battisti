"use strict";
function showCharName(user, key) {
    return `${user[key]}`;
}
const myChar = {
    name: "Emerson",
    age: 35,
    hasDriveLicense: false,
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicense"));
