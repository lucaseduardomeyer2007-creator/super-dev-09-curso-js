/*
========================================
PEGAR ELEMENTOS DO HTML
========================================
*/

const inputNome = document.getElementById("nome");
const inputPreco = document.getElementById("preco");
const selectCategoria = document.getElementById("categoria");
const botao = document.getElementById("btnAdicionar");
const cardapio = document.getElementById("cardapio");

/*
========================================
EVENTO DE CLIQUE
========================================
*/

botao.addEventListener("click", adicionarPrato);

/*
========================================
FUNÇÃO PRINCIPAL
========================================
*/

function adicionarPrato(){

    const nome = inputNome.value;
    const preco = inputPreco.value;
    const categoria = selectCategoria.value;

    /*
    ====================================
    VALIDAÇÃO
    ====================================
    */

    if(nome === "" || preco === "" || categoria === ""){
        alert("Preencha todos os campos!");
        return;
    }

    /*
    ====================================
    CRIAR CARD
    ====================================
    */

    const card = document.createElement("div");

    // classe base do card
    card.classList.add("cardapio-card");

    // classe da categoria (cor)
    card.classList.add(`cardapio-${categoria}`);

    /*
    ====================================
    TÍTULO
    ====================================
    */

    const titulo = document.createElement("h2");
    titulo.innerText = nome;

    /*
    ====================================
    PREÇO
    ====================================
    */

    const valor = document.createElement("p");
    valor.classList.add("cardapio-preco");
    valor.innerText = `R$ ${Number(preco).toFixed(2)}`;
    
    /*
    ====================================
    CATEGORIA
    ====================================
    */

    const tipo = document.createElement("span");
    tipo.classList.add("cardapio-categoria");
    tipo.innerText = categoria;

    /*
    ====================================
    MONTAR CARD
    ====================================
    */

    card.appendChild(titulo);
    card.appendChild(valor);
    card.appendChild(tipo);

    /*
    ====================================
    ADICIONAR NA TELA
    ====================================
    */

    cardapio.appendChild(card);

    /*
    ====================================
    LIMPAR CAMPOS
    ====================================
    */

    inputNome.value = "";
    inputPreco.value = "";
    selectCategoria.value = "";
}