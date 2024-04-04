const express = require('express');
const router = express.Router();
const MateriasController = require('../controllers/materias.c');
const { verificarToken2 } = require('../middlewares/middleware');

// Rutas CRUD para materias

// Mostrar todas las materias
router.get('/', MateriasController.mostrar);

// Buscar una materia por ID
router.get('/:id', MateriasController.buscar);

// Ingresar una nueva materia
router.post('/', verificarToken2, MateriasController.ingresar);

// Modificar una materia
router.put('/:id', verificarToken2, MateriasController.modificar);

// Eliminar una materia
router.delete('/:id', verificarToken2, MateriasController.eliminar);

// Buscar una materia por ID y mostrar sus actividades
router.get('/:id/actividades', MateriasController.actividadesPorMateria);

module.exports = router;