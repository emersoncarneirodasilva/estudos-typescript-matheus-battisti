interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const mersio: Human = {
  name: "Emerson",
  age: 35,
};

const rai: Human = {
  name: "Raiane",
  age: 32,
};

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(mersio);
console.log(rai);
console.log(goku);
