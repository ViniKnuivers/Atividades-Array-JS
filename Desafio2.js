const alunos = [
    { nome: "Ana", turma: "A" },
    { nome: "João", turma: "B" },
    { nome: "Maria", turma: "A" },
    { nome: "Pedro", turma: "B" }
];

const arrumar = alunos.reduce((acumulador, aluno) => {
    if (acumulador[aluno.turma]) {
    acumulador[aluno.turma].push(aluno);
    } else {
    acumulador[aluno.turma] = [aluno];
    }
    return acumulador;
}, {});

console.log(arrumar);