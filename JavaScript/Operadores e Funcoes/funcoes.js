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

let imccalculado = IMCcalculo(70, 1.75);
console.log("Seu IMC é: " + IMCcalculo(70, 1.75).toFixed(2));


function ImparOuPar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(ImparOuPar(7));
console.log(ImparOuPar(10));    