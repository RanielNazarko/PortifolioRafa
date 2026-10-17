
const certificadoRepository = require('../repositories/certificado.repository');

async function obterCertificados() {
    const certificados = await certificadoRepository.buscarCertificados();

    return certificados;
}

module.exports = {
    obterCertificados
};
