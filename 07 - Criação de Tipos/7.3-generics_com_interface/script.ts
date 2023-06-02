interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;
type Bike = MyObject<number, boolean, string>;

const car: Car = { name: "Mustang", wheels: 4, engine: 2.0, color: "Branco" };
const pen: Pen = {
  name: "Caneta Bic",
  wheels: false,
  engine: false,
  color: "Vermelho",
};
const bike: Bike = {
  name: "MountBike",
  wheels: 2,
  engine: false,
  color: "Verde",
};

console.log(car);
console.log(pen);
console.log(bike);
