const express = require('express');
const router = express.Router();
const SeccionesController = require('../controllers/secciones.c');
const { verificarToken2 } = require('../middlewares/middleware');

// Mostrar todas las secciones
router.get('/', SeccionesController.mostrarSecciones);

// Buscar una sección por ID
router.get('/:id', SeccionesController.buscarSeccion);

// Ingresar una nueva sección
router.post('/', verificarToken2, SeccionesController.ingresarSeccion);

// Modificar una sección
router.put('/:id', verificarToken2, SeccionesController.modificarSeccion);

// Eliminar una sección
router.delete('/:id', verificarToken2, SeccionesController.eliminarSeccion);

module.exports = router;