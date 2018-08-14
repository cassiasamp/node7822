const express = require('express')
const servidor = express()

servidor.get('/', function(pedido, resposta) {
    resposta.render('home.ejs')
})

servidor.get('/produtos', function(req, resp) {
    const livros = [
        {
            titulo: 'Livro 1'
            ,preco: 50
            ,descricao:'x'
        }
    ]

    const objetoTemplate = {
            livros: livros   
    }
    
    resp.render('produtos/lista.ejs', objetoTemplate)
})

if(process.env.NODE_PORT == undefined){
    process.env.NODE_PORT = 3000
} 

const porta = process.env.NODE_PORT

servidor.listen(porta, function (){
    console.log('Servidor subiu em http://localhost:' + porta)
})



