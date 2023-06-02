interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "Vw",
  wheels: 4,
};

fusca.brand = "Volkswagen";
// fusca.wheels = 5
console.log(fusca);
