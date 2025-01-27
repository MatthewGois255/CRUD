const express = require("express");
const router = express.Router();

// pra enxergar o arquivo dentro de require()
const controller = require('./controllers/controllers');

router.get('/carros', controller.getAll)
router.get('/carros/:codigo', controller.getOne)
router.post('/carro', controller.insert);

module.exports = router;