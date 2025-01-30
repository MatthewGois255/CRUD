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
    },

    alter: (codigo, marca, modelo) => {
        return new Promise((acc, rej) => {

            db.query('UPDATE carros SET marca = ?, placa = ? WHERE codigo = ?', [marca, modelo, codigo],
                (error, results) => {
                    if(error){ rej(error); return; }
                    acc(results)
                })
        })
    },

    delete: (codigo) => {
        return new Promise((acc, rej) =>{
            db.query('DELETE FROM carrros WHERE codigo = ?', [codigo], (err, res) => {
                if(err){ rej(err)}
                acc(res)
            })
        })
    }
}