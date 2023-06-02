interface A {}

interface B extends A {}

interface C {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 2134;
// const someVar2: myType = "asfasf"

type myType2 = C extends { showNumber(): number } ? string : boolean;
