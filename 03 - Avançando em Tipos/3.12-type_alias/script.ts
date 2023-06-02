type ID = number | string;

function showId(id: ID) {
  return `O ID é: ${id}`;
}

console.log(showId(54));
console.log(showId("22"));
console.log(showId("fwef234tfg35t2f23"));

/*--------------------------------------*/

type User = {
  name: string;
  age: number;
};

function user(user: User): string {
  const { name, age } = user;

  return `O nome: ${name}, idade: ${age} anos`;
}

const userData = { name: "Emerson", age: 35 };
console.log(user(userData));
