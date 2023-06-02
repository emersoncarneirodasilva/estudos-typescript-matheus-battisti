function somaDefault(num1: number, num2 = 0): number {
  return num1 + num2;
}

console.log(somaDefault(5));
console.log(somaDefault(5, 7));
