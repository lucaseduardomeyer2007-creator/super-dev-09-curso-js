function exercicio01CompararDoisNumeros() {
    const campoNumero1 = document.getElementById("numero1")
    const numero1 = parseInt(campoNumero1.value);

    const campoNumero2 = document.getElementById("numero2")
    const numero2 = parseInt(campoNumero2.value);

    alert(`Número 1: ${numero1}
    Número 2: ${numero2}`)
}

function exercicio02ClassificarIdade() {

    const campoNome = document.getElementById("nome")
    const nome = campoNome.value;


    const campoIdade = document.getElementById("idade")
    const idade = parseInt(campoIdade.value);
    debugger
    let faixaEtaria = "";


    if ((idade < 1) || (idade > 100)) {
        alert("Idade inválida, digite novamente");
        return
    }


    else if (idade >= 18) {
        faixaEtaria = " Adulto"
    }

    else if (idade < 18) {
        faixaEtaria = "Adolescente ou inferior"
    }

    alert(`Nome: ${nome}
 Idade: ${idade}
 Faixa Etária: ${faixaEtaria}`)
}


function exercicio03CalcularMediaEscolar() {


const campoNota1 = document.getElementById(nota1)
const nota1 = parsefloat(campoNota1.value);


const campoNota2 = document.getElementById(nota2)
const nota2 = parsefloat(campoNota1.value);


const campoNota3 = document.getElementById(nota3)
const nota3 = parsefloat(campoNota1.value);
}
