const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js')

// Rotas para o controlador de usuários
router.get('/', indexController.index);

module.exports = router;