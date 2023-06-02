function mergeArryas<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

console.log(
  mergeArryas<number | string>(
    [1, 2, 3, 4],
    ["teste1", "teste2", "teste3", "teste4"]
  )
);
