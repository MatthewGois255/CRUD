const express = require("express");
const router = express.Router();

// pra enxergar o arquivo dentro de require()
const controller = require('./controllers/controllers');

// Como faria pra separar essas rotas num arquivo separado?
// ---------------------------------------------
router.get('/carros', controller.getAll)
router.get('/carro/:codigo', controller.getOne)
router.post('/carro', controller.insert)
router.put('/carro/:codigo', controller.alter)
router.delete('/carro/:codigo', controller.delete)
// ---------------------------------------------

module.exports = router;