document.getElementById("conteudo").innerHTML = "<p>Adicionar conteudo html em codigo JS</p>";

document.getElementById("mensagem").textContent = "textContent";

document.getElementById("foto").setAttribute("src", "https://cursinhoparaetec.com.br/wp-content/uploads/2024/03/SENAI_Sao_Paulo_logo.png");

let url = document.getElementById("link").getAttribute("href");

console.log(url);

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alert").classList.add("destaque");

document.getElementById("alerta").classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este parágrafo foi criado pelo JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item Novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);