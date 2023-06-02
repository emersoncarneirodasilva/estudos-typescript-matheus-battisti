// Interface

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person1: Person = { name: "Emerson", age: 35 };
console.log(person1);

/*---------------------------------------*/
// Alias

type personType = {
  name: string;
};

// type personType = {
//   age: number;
// };

const person2: personType = { name: "Raiane" };
console.log(person2);
