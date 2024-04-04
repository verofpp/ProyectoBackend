const express = require('express');
const router = express.Router();
const ActividadesAsignarController = require('../controllers/asignaractividades.c');

// Mostrar formulario para asignar una nueva actividad a una sección
router.get('/', ActividadesAsignarController.mostrarFormulario);

module.exports = router;