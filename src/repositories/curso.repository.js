
const conexao = require('../database/conexao');

async function buscarCursos() {
    const [resultado] = await conexao.query(
        'SELECT id, fk_perfil, nome, horas FROM cursos WHERE fk_perfil = ?',
        [1]
    );

    return resultado;
}

module.exports = { buscarCursos };
