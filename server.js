const express = require('express')
const db = require('./database/bd.js')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { db })
})

const PORT = 81
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})