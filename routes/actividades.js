const express = require('express');
const router = express.Router();
const ActividadesController = require('../controllers/actividades.c');
const { verificarToken } = require('../middlewares/middleware');

// Rutas CRUD para actividades

// Mostrar todas las actividades
router.get('/', ActividadesController.mostrar);

// Buscar una actividad por ID
router.get('/:id', ActividadesController.buscar);

// Ingresar una nueva actividad
router.post('/',  verificarToken, ActividadesController.ingresar);

// Modificar una actividad
router.put('/:id',  verificarToken, ActividadesController.modificar);

// Eliminar una actividad
router.delete('/:id',  verificarToken, ActividadesController.eliminar);

// Obtener la materia de una actividad por ID
router.get('/:id/materia', ActividadesController.obtenerMateria);

// Obtener la semana de una actividad por ID
router.get('/:id/semana', ActividadesController.obtenerSemana);

module.exports = router;