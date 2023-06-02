setTimeout(() => {
  const salary = 2500;
  console.log(salary);
}, 1000);

/*-------------------------------*/

let sum = (num1: number, num2: number, num3: number): number => {
  return (num1 + num2) / num3;
};

console.log(sum(10, 10, 5));
