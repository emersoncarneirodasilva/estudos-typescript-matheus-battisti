abstract class AbstractClass {
  abstract showName(): string;
}

class AbstractExamples extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName(): string {
    return `Nome: ${this.name}`;
  }
}

const person = new AbstractExamples("Emerson");
console.log(person);
console.log(person.showName());
