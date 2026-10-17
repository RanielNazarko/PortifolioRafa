
const perfilRepository = require('../repositories/perfil.repository');

async function obterPerfil() {
    const perfil = await perfilRepository.buscarPerfil();

    return perfil;
}

module.exports = {
    obterPerfil
};
