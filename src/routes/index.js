const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js')
const registerController = require('../controllers/registerController.js')
const loginController = require('../controllers/loginController.js')

router.get('/', indexController.index);

router.get("/register", registerController.register);

router.get("/login", loginController.login);

module.exports = router;