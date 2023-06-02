// Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola V", 20.99);

console.log(shirt);
console.log(`Nome do produto: ${shirt.name}`);
console.log(`Preço do produto: R$ ${shirt.price}`);
console.log(
  `Preço com desconto: R$ ${shirt.productWithDiscount(10).toFixed(2)}`
);

// Outro produto
const tenis = new Product("Tênis Nike", 599.99);

console.log(tenis);
console.log(`Nome do produto: ${tenis.name}`);
console.log(`Preço do produto: R$ ${tenis.price}`);
console.log(
  `Preço com desconto: R$ ${tenis.productWithDiscount(12).toFixed(2)}`
);
