const aluno = require('./aluno');

const Thiago = new aluno.adicionarAluno('Thiago', 1, [10, 1, 10]);
aluno.maisUmaFalta(Thiago);
aluno.maisUmaFalta(Thiago);

const Kelly = new aluno.adicionarAluno('Kelly', 1, [10, 9, 9]);

module.exports = {
    Thiago,
    Kelly,  
}