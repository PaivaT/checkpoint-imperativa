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
        const media = aluno.media(estudante);

        if (
            this.media >= this.minMedia &&
            estudante.quantidadeFaltas <= this.maxFaltas
        ) {
            return `${estudante.nome} foi aprovado(a)`

        }   else {

            return `${estudante.nome} foi reprovado(a)`
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

curso.adcAluno('Felipe', 0, [10, 5, 7]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});