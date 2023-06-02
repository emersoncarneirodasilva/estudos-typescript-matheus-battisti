// Map
const products = [
  { name: "Camisa", price: 10.99, category: "Roupa", onSale: true },
  { name: "Chaleira elétrica", price: 150, category: "Eletro", onSale: false },
  { name: "Fogão", price: 499, category: "Eletro", onSale: false },
  { name: "Calça jeans", price: 49.99, category: "Roupa", onSale: true },
];

products.map((product) => {
  if (product.onSale == true) {
    return console.log(
      `O produto ${product.name} está com desconto de 10%, valendo agora R$ ${(
        product.price -
        product.price * 0.1
      ).toFixed(2)}`
    );
  }
});
