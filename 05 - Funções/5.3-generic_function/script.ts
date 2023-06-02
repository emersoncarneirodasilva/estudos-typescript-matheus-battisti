function firstElement<T>(array: T[]): T {
  return array[1];
}

console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["Emerson", "Raiane", "Maria", "Paulo", "Pedro"]));

/*-------------------------------------------*/

function mergeObjects<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const newObject = mergeObjects(
  { name: "Emerson" },
  { age: 35, job: "Programmer" }
);

console.log(newObject);
