function saudacao() {
    console.log("Ola, Javascript!");    
}

saudacao();


function saudacaoComNome(nome) {
    console.log("Ola, " + nome + "!");
}

saudacaoComNome("Maria");


function nomeDaFuncao (parametros) {
    return resultado;
}


function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3));

function IMCcalculo(peso, altura) {
    return peso / (altura * altura);
}

let imccalculado = parseFloat(prompt("Digite seu peso em kg:"));
let alturacalculada = parseFloat(prompt("Digite sua altura em metros:"));

let imc = IMCcalculo(imccalculado, alturacalculada);

console.log("Seu IMC é: " + imc.toFixed(2));



function ImparOuPar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

//let num = parseInt(prompt("Digite um número:"));
console.log(ImparOuPar(num));

console.log("")

console.log("funções nativas");

console.log("")

console.log("Data e Hora")

