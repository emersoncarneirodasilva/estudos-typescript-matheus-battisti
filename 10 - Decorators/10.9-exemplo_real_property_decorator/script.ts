function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (newValue: string) {
      if (newValue.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos.`);
        return;
      } else {
        value = newValue;
      }
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let person1 = new Admin("Emerson");
console.log(person1);
console.log(person1.username);

let person2 = new Admin("PedroAlbertoOliveira");
console.log(person2);
console.log(person2.username);
