function showBalance(balance: number | string) {
  return `O saldo da conta é: R$ ${balance}`;
}

console.log(showBalance(1.489));
console.log(showBalance("3.902"));

// console.log(showBalance(true));
