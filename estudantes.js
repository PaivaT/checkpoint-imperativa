const { calculoMedia, faltas } = require('./aluno');
const aluno = require('./aluno');

const Thiago = new aluno.adicionarAluno('Thiago', 1, [2, 1, 4]);
aluno.maisUmaFalta(Thiago);
aluno.maisUmaFalta(Thiago);

const Kelly = new aluno.adicionarAluno('Kelly', 1, [10, 9, 9]);

module.exports = {
    Thiago,
    Kelly,  
}

//console.log(calculoMedia(Kelly))
//console.log(calculoMedia(Thiago))