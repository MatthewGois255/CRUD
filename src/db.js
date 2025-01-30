/* a cada nova função e rota que são criadas, esse arquivo (parte do código) não muda, porque sua única função é se conectar e logar no MySQL

O código, portanto, é modularizado, onde as funções ficam individualizadas em módulos e são chamadas quando necessárias

O código fica menos poluído e compreensível
*/
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Connected to the Database: ${process.env.DB_NAME}`)
});

module.exports = connection;