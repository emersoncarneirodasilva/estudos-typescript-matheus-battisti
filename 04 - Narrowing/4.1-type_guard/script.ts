function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossível realizar a soma!");
  }
}

sum("3", "8");
sum(1, 6.7);
sum("5", 1);
