function advancedGreeting(firstName: string, lastName?: string): string {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${lastName}, como vai?`;
  }

  return `Olá ${firstName}, como vai?`;
}

console.log(advancedGreeting("Emerson"));
console.log(advancedGreeting("Raiane", "do Nascimento da Silva"));
