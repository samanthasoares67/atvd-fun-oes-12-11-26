function boasVindas() {
    console.log("Bem-vindo ao meu Sistema Escolar!");
}

boasVindas();
boasVindas();

function mostrarCurso() {
    console.log("Curso: Desenvolvimento de Sistemas");
    console.log("Instituição: Escola de Tecnologia");
}

mostrarCurso();
boasVindas();

function saudarAluno(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo!");
}

saudarAluno("Carlos");
saudarAluno("Mariana");
sauadarAluno("Pedro");

function mostrarAluno(nome, curso) {
    console.log("Aluno: " + nome);
    console.log("Curso: " + curso);
}

mostrarAluno("Ana", "Programaçao");
mostrarAluno("João", "Desenvolvimento de Sistemas");
mostrarAluno("Maria", "Informática");

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    console.log("Média do aluno: " + media);
}

calcularMedia(80, 60);

function adicionarPontos(nota, pontosExtras) {
    let notaAtualizada = nota + pontosExtras;
    console.log("Nota atualizada: " + notaAtualizada);
}

adicionarPontos(65, 10);

function verificarAprovacao(media) {
    if (media >= 60) {
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno reprovado!");
    }
}

verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);

function classificarAluno(nota) {
    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 70) {
        console.log("Bom");
    } else if (nota >= 60) {
        console.log("Regular");
    } else {
        console.log("Insuficiente")
    }
}

classificarAluno(95);
classificarAluno(80);
classificarAluno(65);
classificarAluno(40);

function calcularMensalidade(valor) {
    let desconto = valor * 0.10;
    return valor - desconto;
}

let valorFinal = calcularMensalidade(500);
console.log(valorFinal);

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function avaliarAluno(nome, nota1, nota2) {
    let media = calcularMedia(nota1, nota2);

    console.log("Aluno: " + nome);
    console.log("Média: " + media);

    if (media >= 60) {
        console.log("Situaçao: Aprovado");
    } else {
        console.log("Situaçao: Reprovado");
    }
}

avaliarAluno("Lucas", 80, 70);
