const servidor = require("./servidor")

require("dotenv").config()

const porta = process.env.NODE_PORT

servidor.listen(porta, function (){
    console.log('Servidor subiu em http://localhost:' + porta)
})



