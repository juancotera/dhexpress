const productosController = require('../controllers/productoController');

const express = require("express");
const router = express.Router();

const productoController =  require('../controllers/productoController.js');

//no debemos colocar /productos por que la raiz de la ruta solo es /
router.get('/', productoController.index);

module.exports = router;

