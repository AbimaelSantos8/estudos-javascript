const estudantes = require('./estudantes.json');

function buscaInformação(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformação(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformação(estudantes, 'telefone', '1198123183');
console.log(telefoneEstudante);