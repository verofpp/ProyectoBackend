const express = require('express');
const router = express.Router();
const TrimestreController = require('../controllers/trimestre.c');
const { verificarToken2 } = require('../middlewares/middleware');

// Rutas CRUD para trimestres

// Mostrar todos los trimestres
router.get('/', TrimestreController.mostrar);

// Buscar un trimestre por ID
router.get('/:id', TrimestreController.buscar);

// Ingresar un nuevo trimestre
router.post('/', verificarToken2, TrimestreController.ingresar);

// Modificar un trimestre
router.put('/:id', verificarToken2, TrimestreController.modificar);

// Eliminar un trimestre
router.delete('/:id', verificarToken2, TrimestreController.eliminar);

// Obtener el inicio del trimestre por ID
router.get('/:id/inicio', TrimestreController.obtenerInicio);

module.exports = router;