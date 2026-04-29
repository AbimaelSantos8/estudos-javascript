const estudantes = require('./estudantes.json');

function filtraPorPropriedades(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

//hasOwnProperty verifica se o objeto possui uma propriedade definida no proprio objeto

const listaEnderecosIncompletos = filtraPorPropriedades(estudantes,'cep');

console.log(listaEnderecosIncompletos);
