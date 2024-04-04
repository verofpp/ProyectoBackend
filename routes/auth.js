const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.c');

// Mostrar todos los usuarios
router.get('/', AuthController.mostrarUsuarios);

// Generar token de acceso
router.post('/login', AuthController.generarToken);

// Mostrar formulario de inicio de sesión
router.get('/login', AuthController.mostrarFormularioLogin);

// Iniciar sesión (generar token)
router.post('/login', AuthController.iniciarSesion);

module.exports = router;