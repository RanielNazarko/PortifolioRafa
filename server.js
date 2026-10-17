
const app = require('./src/app');

const PORT = 81;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/portfolio`);
});
