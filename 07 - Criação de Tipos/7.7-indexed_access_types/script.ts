type vehicle = { km: number; kg: number; description: string };

type Km = vehicle["km"];

function showKm(km: Km) {
  console.log(`O veículo já rodou ${km} kms`);
}

const newTruck: vehicle = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga",
};

const newCar: vehicle = {
  km: 5000,
  kg: 1000,
  description: "Carro para passeio",
};
