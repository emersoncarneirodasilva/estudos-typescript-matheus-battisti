"use strict";
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, como vai?`;
    }
    return `Olá ${firstName}, como vai?`;
}
console.log(advancedGreeting("Emerson"));
console.log(advancedGreeting("Raiane", "do Nascimento da Silva"));
