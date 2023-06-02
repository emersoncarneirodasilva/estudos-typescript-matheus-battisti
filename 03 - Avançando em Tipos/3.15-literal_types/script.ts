let test: "testando";

test = "testando";

console.log(test);
console.log("O tipo de test é:", test);

/*---------------------------------------*/

function showDirection(direction: "left" | "right" | "center") {
  return `A direção é: ${direction}`;
}

console.log(showDirection("left"));
console.log(showDirection("right"));
console.log(showDirection("center"));
//showDirection("top")
