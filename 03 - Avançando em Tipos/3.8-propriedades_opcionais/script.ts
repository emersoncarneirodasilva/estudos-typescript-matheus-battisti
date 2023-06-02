function userName(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Nome do usuário: ${firstName} ${lastName}`;
  }
  return `Nome do usuário: ${firstName}`;
}

console.log(userName("Emerson"));
console.log(userName("Raiane", "do Nascimento"));

/*---------------------------------------*/

function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);

  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 8);
// showNumbers(5);
