//ATIVIDADE 1 - Mudar cor do título
document.getElementById("botao1").addEventListener("click", function () {
    document.getElementById("titulo").style.color = "blue";
});


document.getElementById("botao2").addEventListener("click", function () {
    document.getElementById("titulo").style.color = "red";
});

//ATIVIDADE 2 - mostrar e esconder mensagem
document.getElementById("showHide").addEventListener("click", function () {
    document.getElementById("mensagem").classList.toggle("oculto");
});

//ATIVIDADE 3 - Contador de caracteres
document.getElementById("campoTexto").addEventListener("input", function () {
    document.getElementById("contador").textContent = this.value.length;
});

//ATIVIDADE 4 - Contador de clicks
document.getElementById("botaoClick").addEventListener("click", function () {
    let contadorClick = document.getElementById("contadorClick");
    contadorClick.textContent = parseInt(contadorClick.textContent) + 1;
});

//ATIVIDADE 5, 6 e extra- Adicionar itens a uma lista, remover itens da lista e confirmar remoção
document.getElementById("adicionarItem").addEventListener("click", function () {
    let novaLi = document.createElement("li");
    novaLi.textContent = document.getElementById("inputTexto").value;
    document.getElementById("lista").appendChild(novaLi);
    document.getElementById("inputTexto").value = "";
});
document.getElementById("lista").addEventListener("click", function (removerItem) {
    if (removerItem.target.tagName === "LI") {
        if (confirm("Tem certeza que deseja excluir este item?")) {
            removerItem.target.remove();
        }
    }
});
//ATIVIDADE 8 - Validação de campo
document.getElementById("validarCampo").addEventListener("click", function () {
    let campo = document.getElementById("campoValidacao").value;
    if (campo === "") {
        alert("O campo NOME, não pode estar vazio!");
    } else {
        alert("Nome enviado com sucesso!");
    }
}
);
