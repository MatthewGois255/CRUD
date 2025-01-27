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
    }
}