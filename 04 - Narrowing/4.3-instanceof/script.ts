class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const emerson = new User("Emerson");
const raiane = new SuperUser("Raiane");

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    return `Olá ${user.name}, deseja ver os dados?`;
  } else if (user instanceof User) {
    return `Olá ${user.name}!`;
  }
}

console.log(userGreeting(emerson));
console.log(userGreeting(raiane));
// console.log(userGreeting(Paulo));
