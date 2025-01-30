const service = require('../services/services');
 
module.exports = {
    getAll: async (req, res) => {
        let json = {error:'', result:[]};

        let carros = await service.getAll();

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                description: carros[i].modelo
            })
        }
        res.json(json)
    },
    
    getOne: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo
        let carro = await service.getOne(codigo)

        if(carro){
            json.result = carro
        }
        res.json(json)
    },

    insert: async(req, res) => {
        let json = {error:'', result:{}};

        let marca = req.body.marca
        let modelo = req.body.modelo

        if(marca && modelo){
            let ccodigo = await service.insert(marca, modelo)
            json.result = {
                codigo: ccodigo,
                marca,
                modelo
            }
        }else {
            json.error = 'Not sent'
        }
        res.json(json)
    },

    alter: async(req, res) => {
        let json = {error:'', result:{}}

        let codigo = req.params.codigo
        let marca = req.body.marca
        let modelo = req.body.modelo

        // se a requisição não tiver os três parâmetros, o banco não é alterado, o que é uma vulnerabilidade (demais são ignorados)
        if(codigo && marca && modelo){
            await service.alter(codigo, marca, modelo)
            // esse result tem a ver com o result da variável json que eu declarei
            json.result = {
                codigo,
                marca,
                modelo
            }
        }else{
                json.error = 'Not sent'
                //quando ocorre um erro, ele ainda devolve o objeto json, mas preenche a propriedade error com essa mensagem e result fica em branco
            }
            res.json(json)
            // essa resposta entregue em json tem a ver com a variável json que eu declarei lá em cima, que também é usada duas outras vezes
            // bom notar que ela é um objeto, mas aloca (só) o resulto que é exibido para o cliente. Esse objeto também possui a propriedade "error" que já vem vazia
    },
    delete: async(req, res) => {
        let json = {error:'', result:{}}

        await service.delete(req.params.codigo)

        res.json(json)
    }
}