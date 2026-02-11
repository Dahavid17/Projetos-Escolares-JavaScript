let agora = new Date();
console.log(agora);

console.log("")

console.log("");
function mostrarDataHora() {
    let data = new Date();
    
    console.log("Desafio: " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
}

mostrarDataHora();

console.log(mostrarDataHora);

console.log("Desafio:")

console.log("");
console.log("Funções matematicas");
console.log(Math.PI.toFixed(2));

console.log("");
console.log("Função de operações matematicas");

function calcularOprecoes(numero) {
    console.log("Raiz " + Math.sqrt(numero));
    console.log("nmr int mais prx " + Math.round(numero));
    console.log("" + Math.ceil(numero));
    console.log("" + Math.floor(numero));
}

calcularOprecoes(7.8);
console.log("");
let numero = 5;

let quadrado1 = Math.pow(numero, 2);
//ambos fazem a mesma coisa, mas o operador de exponenciação é mais simples e legível, Tom
let quadrado2 = numero ** 2;
  
console.log("");

console.log(quadrado1); // 25
console.log(quadrado2); // 25

let valor = -10;

let absoluto = Math.abs(valor);

console.log(absoluto); // 10

console.log("");
console.log("Funções de string");

function analisarTexto(texto) {
    console.log("" + texto.length);
    console.log("" + texto.toUpperCase());
    console.log("" + texto.toLowerCase());
}

console.log(analisarTexto("JavaScript"));

console.log("");

function VerificaFrase(frase) {
    console.log(frase.includes("JavaScript"));
}

VerificaFrase("Eu estudo JavaScript")

function ContatenarFrases(frase1, frase2) {
    console.log(frase1 + " pessoas do " + frase2);
}
ContatenarFrases("Olá", "Mundo!");