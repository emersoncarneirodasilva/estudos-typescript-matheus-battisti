function showdata<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showdata(4));
console.log(showdata("Olá, tudo bem?"));
console.log(showdata(true));
console.log(showdata([3, 1.45, "Oi"]));
