"use strict";
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(functionGreeting, userName) {
    console.log("Preparando a função...");
    const greet = functionGreeting(userName);
    return greet;
}
console.log(preGreeting(greeting, "Emerson"));
console.log(preGreeting(greeting, "Raiane"));
