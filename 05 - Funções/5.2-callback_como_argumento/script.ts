function greeting(name: string): string {
  return `Olá ${name}!`;
}

function preGreeting(
  functionGreeting: (name: string) => string,
  userName: string
) {
  console.log("Preparando a função...");
  const greet = functionGreeting(userName);
  return greet;
}

console.log(preGreeting(greeting, "Emerson"));
console.log(preGreeting(greeting, "Raiane"));
