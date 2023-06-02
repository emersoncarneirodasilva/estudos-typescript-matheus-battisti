"use strict";
function getSomeKey(obj, key) {
    return `A chave ${key} tem o valor ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));
