
 const express = require("express")

 const server = express()

 //pergar o banco de dados

 const db = require("./database/db")



 /* configurar pasta publica */
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

/* utiliizando template engine para inserir dinamismo no html*/
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



 /* configurando caminhos da aplicação*/
 server.get("/", (req,res) => {
     res.render("index.html")
})

server.get("/create-point", (req, res) => {

    //req.query é o mettodo qe trás todo o conteudo inserido

    //console.log(req.query)

   return res.render("create-point.html")
})


server.post("/savepoint", (req, res) => {

    //req.body: o corpo do formulário
    console.log(req.body)

    //inserir dados no banco

    const query = `
         INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
        )VALUES (?,?,?,?,?,?,?);
         `   
         const values = [
           req.body.image,
           req.body.name,
           req.body.address,
           req.body.address2,
           req.body.state,
           req.body.city,
           req.body.items,
        ]

        function afterInsertData (err){
            if(err) {
                console.log(err)
                return res.render("create-point.html", {erro: true})
            }

            console.log("cadastrado com sucesso")
            console.log(this)


            return res.render("create-point.html", { saved: true })
        }

            db.run(query, values, afterInsertData) 

    
})


server.get("/search", (req,res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
       return res.render("search-results.html", { total: 0})

    }

    //pegar os dados do  banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        
        const total = rows.length;

    //mostrar a pagina html com os dados do banco de dados
    res.render("search-results.html", { places: rows, total })

    })

})



 /* ligar o servidor */

server.listen(3000)