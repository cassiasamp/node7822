require("dotenv").config()
const servidor = require('../../servidor')
const requestServidor = require('supertest')(servidor)

describe("Produto Controller", function(){
    it("listar como json", function(callbackDone){
        requestServidor
            .get("/produtos")
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(200, callbackDone)
     })

    it("insere json", function(callbackDone){
       requestServidor
            .post("/produtos")
            .set("Content-Type", "application/json")
            .send({
                titulo: "teste json",
                preco: 50,
                descricao: "bla bla bla"
            })
            .expect(302, callbackDone)
    })

    it("nao insere titulo vazio", function(callbackDone){
        requestServidor
            .post("/produtos")
            .set("Content-Type", "application/json")
            .send({
                titulo:"",
                preco: 50,
                descricao: "bla bla bla"
            })
            .expect(400, callbackDone)
    })

    it("da 404 em pagina que nao existe", function(callbackDone){
        requestServidor
            .get("/paginainexistente")

            .expect(404, callbackDone)
    })

})