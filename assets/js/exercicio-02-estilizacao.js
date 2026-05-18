function aumentarCaixa() {
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("caixa-normal");
    divCaixa01.classList.add("aumentar-caixa");
}

function tamanhoNormal() {
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("aumentar-caixa");
    divCaixa01.classList.remove("caixa-azul");
    divCaixa01.classList.remove("caixa-vermelha");
    divCaixa01.classList.remove("caixa-verde");

    divCaixa01.classList.add("caixa-normal");
}

function caixaCorAzul() {
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.add("caixa-azul");
    divCaixa01.classList.remove("caixa-vermelha");
    divCaixa01.classList.remove("caixa-verde");

}

function caixaCorVermelha() {
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("caixa-azul");
    divCaixa01.classList.remove("caixa-verde");
    divCaixa01.classList.add("caixa-vermelha");
}

function caixaCorVerde() {
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("caixa-azul");
    divCaixa01.classList.remove("caixa-vermelha");
    divCaixa01.classList.add("caixa-verde");
}

function aplicarAlteracao() {
    debugger
    const campoNome1 = document.getElementById("nome-01")
    const pegarNome = document.getElementsByClassName("apresentar-nomes")[0]
    pegarNome.value = campoNome1.value
}

function temaEscuro() {

    const campoTema2 = document.getElementById("tema2")
    campoTema2.classList.add("card-01")
    
}