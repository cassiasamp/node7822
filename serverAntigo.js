const http = require('http')

const servidor = http.createServer(
    function responde(pedido,resposta){
        if(pedido.url == '/' && pedido.method == 'GET')
            resposta
            .writeHead()
            .end('Home')
        else if(pedido.url == '/admin')
            resposta.end('Admin')
        else
            resposta.end('404')
})

if(process.env.NODE_PORT == undefined){
    process.env.NODE_PORT = 3000
} 

const porta = process.env.NODE_PORT

servidor.listen(porta, function (){
    console.log('Servidor subiu em http://localhost:' + porta)
})



