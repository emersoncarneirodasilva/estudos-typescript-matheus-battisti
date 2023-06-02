class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }

  get showSecond() {
    return `O second é: ${this.second}`;
  }
}

const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(newItem.showSecond);

const newItem2 = new Item(234, false);
console.log(newItem2);
console.log(newItem2.showFirst);
console.log(newItem2.showSecond);
