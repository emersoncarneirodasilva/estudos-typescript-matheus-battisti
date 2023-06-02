// 1 - Importação de arquivo
import importGreet from "./greet";

importGreet();

// 2 - Importação de variáveis
import { x, y } from "./variable";

console.log(x);
console.log(y);

// 3 - Importações mútiplas
import { a, b, greeting } from "./mutiple";

console.log("Variável a: ", a);
console.log("Variável b: ", b);

greeting();

// 4 - Alias
import { someName as name } from "./changeName";

console.log(name);

// 5 - Importa tudo
import * as mySum from "./importAll";
const { num1, num2, num3, sum } = mySum;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(sum(num1, num2, num3));

// 6 - Importando tipos
import { Human } from "./myType";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new User("Emerson", 35);
console.log(person);
console.log(`Nome: ${person.name}`);
console.log(`Idade: ${person.age} anos`);
