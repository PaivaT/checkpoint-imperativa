const aluno = {
    nome: '',
    faltas: 0,
    notas: [],
    adicionarAluno: function(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    },
    calculoMedia: function(aluno) {
        let total = 0;

        aluno.notas.forEach(nota => {
            total += nota;
        });

        return total/aluno.notas.length;
    },

    maisUmaFalta: function(aluno) {
        aluno.faltas++;
    }
}

module.exports = aluno;