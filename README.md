
# Portfólio da Rafaelly

Projeto de portfólio desenvolvido com Node.js, Express, EJS e MySQL, como atividade de integração do back-end com banco de dados.

## Tecnologias utilizadas

- Node.js
- Express
- EJS
- MySQL
- mysql2
- dotenv
- Tailwind CSS

## Funcionalidades

- Exibição dos dados do perfil cadastrados no banco de dados.
- Listagem dos certificados armazenados no MySQL.
- Organização do back-end em camadas.
- Consulta aos cursos cadastrados no banco, sem exibi-los na página do portfólio.

## Arquitetura do projeto

O sistema utiliza as seguintes camadas:

- **Routes:** definem as rotas da aplicação.
- **Controllers:** recebem as requisições e coordenam a resposta.
- **Services:** organizam a lógica da aplicação.
- **Repositories:** executam consultas ao banco de dados.
- **Database:** contém a conexão MySQL e o script de criação das tabelas.
- **Views:** contêm as páginas renderizadas com EJS.

## Estrutura de pastas

```text
PortifolioRafa/
├── server.js
├── package.json
├── .env
├── .gitignore
├── README.md
└── src/
    ├── app.js
    ├── controllers/
    ├── database/
    │   ├── banco.sql
    │   └── conexao.js
    ├── repositories/
    ├── routes/
    ├── services/
    └── views/
        └── portfolio.ejs
```

## Configuração

1. Instale o Node.js e o MySQL.
2. Clone ou baixe o projeto.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie o banco e as tabelas executando o script `src/database/banco.sql` no MySQL Workbench.
5. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=portfolio_rafa
   ```

6. Inicie o servidor:

   ```bash
   npm start
   ```

7. Acesse no navegador:

   http://localhost:81/portfolio

## Observação

O script `banco.sql` cria a estrutura do banco de dados, mas não insere automaticamente os dados do perfil, dos cursos ou dos certificados.
