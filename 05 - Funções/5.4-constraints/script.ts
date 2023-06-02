function biggestNumber<T extends number | string>(num1: T, num2: T): T {
  let biggest: T;

  if (Number(num1) > Number(num2)) {
    biggest = num1;
  } else {
    biggest = num2;
  }

  return biggest;
}

console.log(biggestNumber(5, 7));
console.log(biggestNumber("12", "31"));
// console.log(biggestNumber(2, "1"));
