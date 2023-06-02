"use strict";
function showProductDetails(product) {
    const { name, price, isAvailable } = product;
    if (isAvailable === true) {
        return `O produto ${name} custa o valor de R$ ${price}`;
    }
    return `O produto ${name} não está disponivel em estoque!`;
}
const laptopDell = {
    name: "Laptop Dell",
    price: 4.987,
    isAvailable: true,
};
console.log(showProductDetails(laptopDell));
const tvSmartLG = {
    name: "TV SmartLG",
    price: 2.659,
    isAvailable: false,
};
console.log(showProductDetails(tvSmartLG));
