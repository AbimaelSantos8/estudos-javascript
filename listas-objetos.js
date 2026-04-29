const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511983280197', '5511954340429'],
    endereco : [{
        rua: 'Rua Domingos Nogueira',
        numero : '335',
        complemento: 'casa 2'
    }]
}


estudante.endereco.push({
    rua: 'Rua  Nogueira',
    numero : '343',
    complemento: ''
})


//console.log(estudante.endereco);
//console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);