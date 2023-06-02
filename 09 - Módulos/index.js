"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Importação de arquivo
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
// 2 - Importação de variáveis
const variable_1 = require("./variable");
console.log(variable_1.x);
console.log(variable_1.y);
// 3 - Importações mútiplas
const mutiple_1 = require("./mutiple");
console.log("Variável a: ", mutiple_1.a);
console.log("Variável b: ", mutiple_1.b);
(0, mutiple_1.greeting)();
// 4 - Alias
const changeName_1 = require("./changeName");
console.log(changeName_1.someName);
// 5 - Importa tudo
const mySum = __importStar(require("./importAll"));
const { num1, num2, num3, sum } = mySum;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(sum(num1, num2, num3));
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new User("Emerson", 35);
console.log(person);
console.log(`Nome: ${person.name}`);
console.log(`Idade: ${person.age} anos`);
