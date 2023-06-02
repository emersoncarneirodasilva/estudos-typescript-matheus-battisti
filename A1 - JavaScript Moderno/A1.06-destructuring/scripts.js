// Destructuring com arrays
const fruits = ["Maçã", "Banana", "Melancia", "Mamão"];
const [fruit1, fruit2, fruit3, fruit4] = fruits;

console.log(`Fruta 1 - ${fruit1}`);
console.log(`Fruta 2 - ${fruit2}`);
console.log(`Fruta 3 - ${fruit3}`);
console.log(`Fruta 4 - ${fruit4}`);

// Destructuring com objetos
const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${price}, é da categoria ${productCategory} e é da cor ${color}.`
);
