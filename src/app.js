
const express = require('express');
const portfolioRoutes = require('./routes/portfolio.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/portfolio', portfolioRoutes);

module.exports = app;
