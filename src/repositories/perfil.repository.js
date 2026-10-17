
const conexao = require('../database/conexao');

async function buscarPerfil() {
    const [resultado] = await conexao.query(
        'SELECT id, nome, email, descricao FROM perfil LIMIT 1'
    );

    return resultado[0] || null;
}

module.exports = {buscarPerfil};
