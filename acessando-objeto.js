const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript'
};

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}



console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));