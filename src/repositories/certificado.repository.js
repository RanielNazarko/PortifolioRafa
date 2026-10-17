
const conexao = require('../database/conexao');

async function buscarCertificados() {
    const [resultado] = await conexao.query(
        `SELECT id, fk_perfil, titulo, ano
         FROM certificados
         WHERE fk_perfil = ?
         ORDER BY id ASC`,
        [1]
    );

    return resultado;
}

module.exports = { buscarCertificados };
