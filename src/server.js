// A dependência dotenv é usada pra ter acesso aos dados das variáveis de ambiente
require('dotenv').config({path:'variaveis.env'});
const express = require('express');
// o cors permite acesso para trabalhar com APIs. Ter acesso a recursos de outros sites, mesmo estando em domínios diferentes
const cors = require('cors');
// body parse é o módulo capaz de converter o body de uma requisição para vários outros formatos
const bodyParser = require('body-parser');

// ligação com o arquivo de rotas
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

// faz com que todos os endereços das rotas tenham o prefixo api
server.use('/api', routes);

server.listen(process.env.PORT, ()=> {
    console.log(`Server running in http://localhost:${process.env.PORT}`)
});
