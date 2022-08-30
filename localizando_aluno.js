const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        i = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][i] + ' sua media é ' + listaDeNotasEAlunos[1][i]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))