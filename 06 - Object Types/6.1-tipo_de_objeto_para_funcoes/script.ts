interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product): string {
  const { name, price, isAvailable } = product;

  if (isAvailable === true) {
    return `O produto ${name} custa o valor de R$ ${price}`;
  }

  return `O produto ${name} não está disponivel em estoque!`;
}

const laptopDell: Product = {
  name: "Laptop Dell",
  price: 4.987,
  isAvailable: true,
};
console.log(showProductDetails(laptopDell));

const tvSmartLG: Product = {
  name: "TV SmartLG",
  price: 2.659,
  isAvailable: false,
};
console.log(showProductDetails(tvSmartLG));
