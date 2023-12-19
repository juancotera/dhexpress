const express = require('express');
const path = require('path');
const router = express.Router();

//const mainController = require('../controllers/mainController');

router.get('/', (req, res) => {
  // res.send('Hola, ya estamos listos, Soy el main.');
  res.sendFile(path.resolve(__dirname, '../views/home.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/about.html'));
});

module.exports = router;