const acoes = require('./acoes');

module.exports = [
    {
        type: "list",
        name: "acao",
        message: "O que deseja realizar?",
        choices: [acoes.LISTAR, acoes.ADICIONAR, acoes.BUSCAR, acoes.EDITAR, acoes.REMOVER]
    },
    {
        type: 'input',
        name: 'nome',
        message: 'Digite o seu nome:',
        validate: valor => {
            return valor.trim().length > 0
        },
        filter: valor => valor.trim(),
        when: respostas => respostas.acao == acoes.ADICIONAR
    }
]