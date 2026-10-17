
const cursoRepository = require('../repositories/curso.repository');

async function obterCursos() {
    const cursos = await cursoRepository.buscarCursos();

    return cursos;
}

module.exports = { obterCursos };
