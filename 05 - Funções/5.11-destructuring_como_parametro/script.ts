function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O produto ${name}, custa R$ ${price}`;
}

const mouse = { name: "Mouse", price: 72.35 };
console.log(showProductDetails(mouse));
