"use strict";
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `A quantidade é: ${this.qty}`;
    }
    get showPrice() {
        return `O valor é: R$ ${this.price}`;
    }
}
const product = new ParameterProperties("Camisa", 5, 59.99);
console.log(product);
console.log("O produto é: ", product.name);
console.log(product.showQty);
console.log(product.showPrice);
