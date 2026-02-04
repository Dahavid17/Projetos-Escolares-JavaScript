console.log("Hello World!");

let a = 10;
let b = 3;
let c = 5;

console.log((a + b + c) /3);

console.log(a % c);

console.log("operador de adição",a + b); //soma
console.log("operador de subtração", a - b); //subtração
console.log("Operador de multiplicaçao",a * b); //multiplicação
console.log("operador de divisao",a / b); //divisão
console.log("operador de modulo",a % b); //módulo
console.log("operador de exponenciaçao",a ** b); //exponenciação
console.log("operador de incremento",++a); //incremento
console.log("operador de decremento",--b); //decremento

let contador = 5;
contador++;
console.log(contador);


let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

//EXERCICIO 3

let idade = 20;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

let idade2 = 16
if (idade2 >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

let num1 = 1;
let num2 = 2;

if (num1 > num2) {
    console.log("num1 é maior que num2");
} else if (num1 < num2) {
    console.log("num1 é menor que num2");
}
else {
    console.log("num1 é igual a num2");
}

//exemplos de operadores logicos

console.log("");

let age = 20;
let TemCarteira = true;
console.log ("Tem carteira e é maior de idade?");
console.log(age >= 18 && TemCarteira === true); //AND

console.log("");

console.log("Nao esta chovendo e tem guarda-chuva?");
let chovendo = false;
let GuardaChuva = true;
console.log(chovendo || GuardaChuva); //OR

console.log("");

console.log("O carro está desligado?");
let ligado = false;
console.log(!ligado); //NOT

//EXERCICIO operadores logicos

console.log("exercicio operadores logicos");
console.log("");

let nota1 = 8;
let frequencia = 75;

if (nota1 >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


