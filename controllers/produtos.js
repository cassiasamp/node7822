// função construtora
const ProdutoDAO = require("../db/produtoDAO3")

const connectionFactory = require("../db/connectionFactory")

function listagemProdutos(req, resp, callbackNext){
    const conexao = connectionFactory.getConnection()

    const produtoDAO = new ProdutoDAO(conexao)
    
    produtoDAO.lista(
        function success(resultado = []){

            resp.format({
                json: () =>  resp.send({livros: resultado})
                ,html: () =>  resp.render("produtos/lista", {livros: resultado})
            })
               
            conexao.end()
        }
        ,function error(erro){
            callbackNext(erro)
        }
    )
}

function mostraForm(req, resp){
    resp.render("produtos/form", {
        validationErrors:[]
    })
}

function cadastroProdutos(req, resp, callbackNext){
    const livro = req.body

    /*let listaErros = []

    if(!livro.preco){
        listaErros.push({msg:"preço vazio"})
    }

    if(!livro.titulo){
        listaErros.push({msg:"titulo vazio"})
    }*/

    req.assert('preco', "Preco invalido").isNumeric()
    req.assert('titulo', "Titulo invalido").notEmpty()
    //req.assert('cpf', "cpf invalido").notEmpty()

    let listaErros = req.validationErrors()

    if(!listaErros.length){
        const conexao = connectionFactory.getConnection()
        const produtoDAO = new ProdutoDAO(conexao)
    
        produtoDAO.save(
            livro
            , function(){
                resp.redirect('/produtos')
            }
            , function(erro){
                callbackNext(erro)        
            }   
        )
    } else{
        resp
            .status(400)
            .render('produtos/form', {
                validationErrors: listaErros
        })
    }
   
}



// revealing module
module.exports = {
    listagem: listagemProdutos,
    form: mostraForm,
    cadastro: cadastroProdutos
}