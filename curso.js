const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    cursoNome: 'CTD',
    minMedia: 6,
    maxFaltas: 4,
    listaEstudantes: [
        estudantes.Thiago,
        estudantes.Kelly,
    ],
    adcAluno: function(nome, faltas, notas) {
        this.listaEstudantes.push(new aluno.adicionarAluno(nome, faltas, notas));
    },
    aprovacao: function(estudante) {
        const mediaFinal = aluno.calculoMedia(estudante);

        if (
            mediaFinal >= this.minMedia &&
            estudante.faltas < this.maxFaltas
        ) {
            return `${estudante.nome} foi aprovado(a)`;
        } else if (
            estudante.faltas === this.maxFaltas &&
            mediaFinal > this.minMedia * 1.1
        ) {
            return `${estudante.nome} foi aprovado(a) com ressalvas`;
        } else {
            return `${estudante.nome} foi reprovado(a)`;
        }
    },

    listaAprovados: function() {
        let todos = [];

        this.listaEstudantes.forEach(estudante => {
            todos.push(this.aprovacao(estudante));
        });

        return todos;
    }
}

curso.adcAluno('Felipe', 4, [10, 6, 7]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});