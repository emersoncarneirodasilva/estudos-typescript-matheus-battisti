function myDecorator() {
  console.log("iniciando decorator!");

  return function (
    target: any,
    propertyKey: string,
    description: PropertyDescriptor
  ) {
    console.log("myDecorator() executado");
    console.log(target);
    console.log(propertyKey);
    console.log(description);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("Terminando a execução do métodos!");
  }
}

const myObj = new MyClass();
myObj.testing();
