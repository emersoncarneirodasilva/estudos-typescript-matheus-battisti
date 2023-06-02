"use strict";
class StaticMethod {
    static staticMethod() {
        return "Este é um método estático!";
    }
}
StaticMethod.prop = "Teste Static";
console.log(StaticMethod.prop);
console.log(StaticMethod.staticMethod());
