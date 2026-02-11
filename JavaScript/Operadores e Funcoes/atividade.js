// DATA E HORA
let date = new Date();

console.log("Data e Hora:");

function DateHour() {
    console.log(date.getHours() + ":" + date.getMinutes());
}

DateHour();
console.log("");

// SOMA E MÉDIA
console.log("Soma e Média:");

function MediaeSoma(a, b) {
    console.log("Soma: " + (a + b));
    console.log("Média: " + ((a + b) / 2));
}

let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

MediaeSoma(a, b);
console.log("");

// QUANTIDADE DE LETRAS E NOME EM MAIÚSCULO
console.log("Quantidade de letras e nome em maiúsculo:");

function nomes() {
    let nome = prompt("Digite seu nome:");
    console.log("Quantidade de letras: " + nome.length);
    console.log("Nome em maiúsculo: " + nome.toUpperCase());
}

nomes();
console.log("");


// VERIFICAR SE A FRASE TEM A PALAVRA HTML
console.log("Verificar se a frase tem a palavra HTML:");

function VerificaFrase() {
    let frase = prompt("Digite uma frase:");
    console.log(frase.includes("HTML"));
}

VerificaFrase();
