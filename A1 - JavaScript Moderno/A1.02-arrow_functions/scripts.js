// Função anônima
const sum = function (a, b) {
  return console.log(a + b);
};

sum(2, 5);

// Arrow Function
const arrowSum = (a, b) => {
  return console.log(a + b);
};

arrowSum(5, 5);

const greeting = (name) => {
  if (name == "Emerson") {
    return console.log(`Olá ${name}!`);
  } else {
    return console.log("Olá!");
  }
};

greeting("Emerson");
greeting("Pedro");

// Sem argumento
const testArrow = () => {
  console.log("Função sem argumentos");
};

testArrow();

// Testando com This
const user = {
  name: "Emerson",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 1000);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`UsernameArrow: ${this.name}`);
    }, 1500);
  },
};

user.sayUserName(); // O This nesse contexto será o pai window
user.sayUserNameArrow(); // O This nesse contexto será o user

// OBS: Arrow Function pode ser mescrita assim:
const arrowText = (text) => console.log(text);

arrowText("Arrow Function pode ser escrita também dessa forma");
