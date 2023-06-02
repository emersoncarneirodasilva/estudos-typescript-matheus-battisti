class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();
const gatinho: Cat = new Dog();

console.log(doguinho);
console.log(gatinho);
