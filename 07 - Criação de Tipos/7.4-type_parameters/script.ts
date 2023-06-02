function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} tem o valor ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));
