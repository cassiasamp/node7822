const express = require('express')
const servidor = express()

servidor.set("view engine", "ejs")

servidor.get("/", function(pedido, resposta) {
    resposta.render("home.ejs")
})

require('./routes/produtos')(servidor)

servidor.use(express.static('./static'))

module.exports = servidor
