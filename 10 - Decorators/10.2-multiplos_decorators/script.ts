function a() {
  return function (
    target: any,
    property: string,
    descriptior: PropertyDescriptor
  ) {
    console.log("Executou a");
    console.log(target);
    console.log(property);
    console.log(descriptior);
  };
}

function b() {
  return function (
    target: any,
    property: string,
    descriptior: PropertyDescriptor
  ) {
    console.log("Executou b");
    console.log(target);
    console.log(property);
    console.log(descriptior);
  };
}

function c() {
  return function (
    target: any,
    property: string,
    descriptior: PropertyDescriptor
  ) {
    console.log("Executou c");
    console.log(target);
    console.log(property);
    console.log(descriptior);
  };
}

class MultipleClass {
  @c()
  @a()
  @b()
  testing() {
    console.log("Terminando execução do método");
  }
}

const mutiple = new MultipleClass();
mutiple.testing();
