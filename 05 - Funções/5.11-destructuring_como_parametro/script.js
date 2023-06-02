"use strict";
function showProductDetails({ name, price, }) {
    return `O produto ${name}, custa R$ ${price}`;
}
const mouse = { name: "Mouse", price: 72.35 };
console.log(showProductDetails(mouse));
