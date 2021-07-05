var express = require('express');
var router = express.Router();
const platillosController = require('../controllers/platillosController.js');

/* GET home page. */
router.get('/', platillosController.menuPlatillos);

router.get('/detalleMenu/:id', platillosController.detallePlatillo);

module.exports = router;
