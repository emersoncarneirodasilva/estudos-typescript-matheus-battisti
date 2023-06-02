const userName: string = "Emerson";

const userName2: typeof userName = "Raiane";

const userName3: typeof userName = "Maria";

type User = typeof userName;

const userName4: User = "Joaquim";

console.log(userName);
console.log(userName2);
console.log(userName3);
console.log(userName4);
