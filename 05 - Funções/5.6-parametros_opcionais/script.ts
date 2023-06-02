function modernGreeting(name: string, greet?: string): string {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }

  return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Emerson"));
console.log(modernGreeting("Raiane", "Sra."));
