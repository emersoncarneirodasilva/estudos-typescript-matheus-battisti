// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterNumbers = numbers.filter((number) => {
  if (number >= 5) {
    return console.log(number);
  }
});

const users = [
  { name: "Emerson", available: true },
  { name: "Pedro", available: false },
  { name: "Marcos", available: true },
  { name: "Josias", available: false },
];

const availableUsers = users.filter((user) => {
  if (user.available === true) {
    return console.log(user.name);
  }
});

const notAvailableUsers = users.filter((user) => {
  if (user.available !== true) {
    return console.log(user.name);
  }
});
