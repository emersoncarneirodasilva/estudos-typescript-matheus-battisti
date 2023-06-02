class StaticMethod {
  static prop = "Teste Static";

  static staticMethod() {
    return "Este é um método estático!";
  }
}

console.log(StaticMethod.prop);
console.log(StaticMethod.staticMethod());
