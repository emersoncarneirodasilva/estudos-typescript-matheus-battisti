class Animal {
  name;
  raca;

  constructor(name: string, raca: string) {
    this.name = name;
    this.raca = raca;
  }
}

class Wild extends Animal {
  claws;

  constructor(name: string, raca: string, claws: boolean) {
    super(name, raca);
    this.claws = claws;
  }
}

const gato = new Animal("Litte Black", "Siâmes");
console.log(gato);

const tigre = new Wild("Big Cat", "Tiger", true);
console.log(tigre);
