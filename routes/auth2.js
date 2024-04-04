const express = require('express');
const router = express.Router();
const Auth2Controller = require('../controllers/auth2.c');

// Mostrar todos los usuarios
router.get('/', Auth2Controller.mostrarUsuarios);

// Generar token de acceso
router.post('/login', Auth2Controller.generarToken);

module.exports = router;