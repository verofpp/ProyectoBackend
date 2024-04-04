const express = require('express');
const router = express.Router();
const ActividadesSeccionController = require('../controllers/actividadesseccion.c');
const { verificarToken } = require('../middlewares/middleware');

// Rutas CRUD para actividades de sección

// Mostrar todas las actividades de sección
router.get('/', ActividadesSeccionController.mostrarActividadesSeccion);

// Buscar una actividad de sección por ID
router.get('/:id', ActividadesSeccionController.buscarActividadSeccion);

// Ingresar una nueva actividad de sección
router.post('/', ActividadesSeccionController.ingresarActividadSeccion);

// Modificar una actividad de sección
router.put('/:id', verificarToken, ActividadesSeccionController.modificarActividadSeccion);

// Eliminar una actividad de sección
router.delete('/:id', verificarToken, ActividadesSeccionController.eliminarActividadSeccion);

module.exports = router;
