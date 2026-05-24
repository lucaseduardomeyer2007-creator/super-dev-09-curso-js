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


function exercicio3CalcularMediaEscolar() {
    // Pega os valores dos campos
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Determina a situação do aluno
    let situacao = "";
    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    // Mostra o resultado no textarea
    document.getElementById("resultado").value = 
        `Média: ${media.toFixed(2)} - Situação: ${situacao}`;
}

