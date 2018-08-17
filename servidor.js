const express = require('express')
const servidor = express()

servidor.set("view engine", "ejs")

servidor.use(express.urlencoded())
servidor.use(express.json())

servidor.get("/", function(pedido, resposta) {
    resposta.render("home.ejs")
})

require('./routes/produtos')(servidor)

servidor.use(express.static('./static'))

module.exports = servidor



//const queryString = require('query-string')

/* let bodyTexto = ""

req.on("data", function(chunk){
    bodyTexto += chunk.toString(, callbackNext){
})

req.on("end", function(){
    req.body = queryString.parse(bodyTexto)
    callbackNext()
    const livro = req.body
})
} */
//const livro = {titulo:"Teste cadastro", descricao: "blablabla", preco:50}