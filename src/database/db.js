
const sqlite3 = require("sqlite3").verbose();

/* iniciar o objeto que vai fazer operações no banco */

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

/* utilizar o objeto do banco para as operações */

db.serialize( function(){
    /*criar uma tabela*/

    /* db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `) */

     //2 inserir dado na tabela
        /*   const query = `
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
            "https://janikingbrasil.com.br/wp-content/uploads/2017/12/reciclagem-de-residuos.jpg",
            "Papersider",
            "João B Figuqredo",
            "Nº 50",
            "Pará",
            "Belém",
            "Papéis e papelão"
        ]

        function afterInsertData (err){
            if(err) {
                return console.log(err)
            }
            console.log("cadastrado com sucesso")
            console.log(this)
        }

            db.run(query, values, afterInsertData)  */


    // 3 consultar dado na tabela-------------------------

    /* db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        console.log("aqui estão seus registros: ")
        console.log(rows)
    }) */
    



    //4 deletar dados da tabela-----------------------------

    /* db.run(` DELETE FROM places WHERE id = 5`, function(err){
        if(err){
            console.log(err)
        }
        console.log("deletado")
    }) */

   // modificar algo na tabela------------------------------

   /* db.run(` UPDATE places SET address = ("João B. Figueiredo") WHERE id = 3`, function(err){
       if(err){
           console.log(err)
       }
       console.log("atualizado")
   }) */

   

}) 