// Herança
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

class ProductWithAttribute extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttribute("Chapéu", 29.99, [
  " Preto",
  " Branco",
  " Cinza",
]);

console.log(hat);
console.log(`Produto: ${hat.name}`);
console.log(`Preço: R$ ${hat.price}`);
console.log(`Preço com desconto: R$ ${hat.productWithDiscount(30).toFixed(2)}`);
console.log(`Cores: ${hat.colors}`);

hat.showColors();
