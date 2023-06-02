let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Pêra"];

// myArray[3] = 'Mamão'

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);
