let input = document.querySelector("#senha");
let botao = document.querySelector("#botaoSenha");

botao.addEventListener("click", function() {
    if(input.type === "password") {
        input.setAttribute("type", "text");
        botao.classList.remove("bi-eye-fill");
        botao.classList.add("bi-eye-slash-fill");
    } else {
        input.setAttribute("type", "password");
        botao.classList.remove("bi-eye-slash-fill");
        botao.classList.add("bi-eye-fill");
    }
});