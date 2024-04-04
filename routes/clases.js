const express = require('express');
const router = express.Router();
const ClasesController = require('../controllers/clases.c');
const { verificarToken } = require('../middlewares/middleware');

// Rutas CRUD para clases

// Mostrar todas las clases
router.get('/', ClasesController.mostrar);

// Buscar una clase por ID
router.get('/:id', ClasesController.buscar);

// Ingresar una nueva clase
router.post('/', verificarToken, ClasesController.ingresar);

// Modificar una clase
router.put('/:id', verificarToken, ClasesController.modificar);

// Eliminar una clase
router.delete('/:id', verificarToken, ClasesController.eliminar);

// Obtener la materia de una clase por ID
router.get('/:id/materia', ClasesController.obtenerMateria);

// Obtener el horario de una clase por ID
router.get('/:id/horario', ClasesController.obtenerHorario);

module.exports = router;