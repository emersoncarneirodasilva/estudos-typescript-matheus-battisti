"use strict";
function showProductName(product) {
    const { name } = product;
    return `O produto comprado foi: ${name}`;
}
const camisa = { name: "Camisa", price: 59.99, cor: "Branca" };
const carro = { name: "Carro", rodas: 4 };
const obj = { price: 19.99, qty: 10 };
console.log(showProductName(camisa));
console.log(showProductName(carro));
// console.log(showProductName(obj));
