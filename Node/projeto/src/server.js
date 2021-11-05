const porta = 3001

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./database')

app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/produtos', (req, res, next) =>{
    res.send(dataBase.getProdutos()) //converter para JSON
    
})

app.get('/produto/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produto/:id', (req, res, next) => {
    const produto = dataBase.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produto/:id', (req, res, next) => {
    const produto = dataBase.deleteprodutos(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})