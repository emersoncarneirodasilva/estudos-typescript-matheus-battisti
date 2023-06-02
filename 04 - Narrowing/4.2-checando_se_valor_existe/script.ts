function operations(arr: number[], operation: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      return sum;
    } else if (operation === "subt") {
      const subt = arr.reduce((i, total) => i - total);
      return subt;
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      return multiply;
    } else if (operation === "div") {
      const div = arr.reduce((i, total) => i / total);
      return div;
    }
  } else {
    return "Por favor, defina uma operação!";
  }
}

console.log(operations([2, 5, 1], "sum"));
console.log(operations([2, 5, 1], "subt"));
console.log(operations([2, 5, 1], "multiply"));
console.log(operations([2, 5, 1], "div"));
console.log(operations([2, 5, 1], ""));
