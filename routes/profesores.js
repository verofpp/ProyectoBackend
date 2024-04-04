const express = require('express');
const router = express.Router();
const ProfesoresController = require('../controllers/profesores.c');
const { verificarToken2 } = require('../middlewares/middleware');

// Rutas CRUD para profesores

// Mostrar todos los profesores
router.get('/', ProfesoresController.mostrarProfesores);

// Buscar un profesor por ID
router.get('/:id', ProfesoresController.buscarProfesor);

// Ingresar un nuevo profesor
router.post('/', verificarToken2, ProfesoresController.ingresarProfesor);

// Modificar un profesor
router.put('/:id', verificarToken2, ProfesoresController.modificarProfesor);

// Eliminar un profesor
router.delete('/:id', verificarToken2, ProfesoresController.eliminarProfesor);

module.exports = router;