const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const person = new myClass("Emerson");
console.log(person);
console.log(person.name);
