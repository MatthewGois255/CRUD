// regras e comandos do banco de dados. Ela é responsável pela conexão com o banco de dados
const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((accepted, rejected) => {

            db.query('SELECT * FROM carros', (error, results) => {
                if (error) { rejected(error); return; }
                accepted(results)
            })
        })
    },
    getOne: (codigo) => {
        return new Promise((accepted, rejected) => {

            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejected(error); return; }
                if(results.length > 0) {
                    accepted(results[0])
                } else {
                    accepted(false);
                }
            })
        })
    },

    insert:  (marca, modelo) => {
        return new Promise((accepted, rejected) => {

            db.query('INSERT INTO carros (marca, modelo) VALUES (?, ?)', [marca, modelo], (error, results) => {
                    if (error) { rejected(error); return; }
                    accepted(results.insert)
            }
        )
    })
    }
}