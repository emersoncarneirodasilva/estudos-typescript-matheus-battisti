function classDecorator(constructor: Function) {
  console.log("constructor.name: ", constructor.name);

  if (constructor.name === "User") {
    console.log("Criando usuário!");
  }
}

@classDecorator
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const person1 = new User("Emerson");
console.log(person1);
console.log("Nome:", person1.name);
