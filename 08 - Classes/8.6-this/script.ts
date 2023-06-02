class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    return `Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência.`;
  }
}

const volvo = new Truck("Volvo", 400);
console.log(volvo.showDetails());

const scania = new Truck("Scania", 500);
console.log(scania.showDetails());
