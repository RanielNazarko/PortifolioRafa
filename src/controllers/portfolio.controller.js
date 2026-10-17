
const perfilService = require('../services/perfil.service');
const certificadoService = require('../services/certificado.service');

async function mostrarPortfolio(req, res) {
    try {
        const perfil = await perfilService.obterPerfil();
        const certificados = await certificadoService.obterCertificados();

        res.render('portfolio', {
            dados: {
                perfil: perfil,
                certificados: certificados
            }
        });
    } catch (erro) {
        console.error('Erro ao carregar o portfólio:', erro.message);

        res.status(500).send(
            'Não foi possível carregar o portfólio.'
        );
    }
}

module.exports = { mostrarPortfolio };
