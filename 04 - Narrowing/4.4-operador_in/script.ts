class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");

function showDogDetails(dog: Dog) {
  if ("breed" in dog) {
    return `O cão ${dog.name} é da raça: ${dog.breed}`;
  } else {
    return "O cão é um SRD!";
  }
}

console.log(showDogDetails(turca));
console.log(showDogDetails(bob));
