"use strict";
function showId(id) {
    return `O ID é: ${id}`;
}
console.log(showId(54));
console.log(showId("22"));
console.log(showId("fwef234tfg35t2f23"));
function user(user) {
    const { name, age } = user;
    return `O nome: ${name}, idade: ${age} anos`;
}
const userData = { name: "Emerson", age: 35 };
console.log(user(userData));
