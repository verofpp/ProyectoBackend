const express = require('express');
const router = express.Router();
const EventosController = require('../controllers/eventos.c');
const { verificarToken , verificarToken2 } = require('../middlewares/middleware');

// Rutas CRUD para eventos

// Mostrar todas los eventos
router.get('/', EventosController.mostrarEventos);

// Buscar un evento por ID
router.get('/:id', verificarToken, EventosController.buscarEvento);

// Ingresar un nuevo evento
router.post('/', verificarToken2, EventosController.ingresarEvento);

// Modificar un evento
router.put('/:id', verificarToken2, EventosController.modificarEvento);

// Eliminar un evento
router.delete('/:id', verificarToken2, EventosController.eliminarEvento);

// Consultar eventos por fecha
router.get('/fecha/:fecha', verificarToken, EventosController.consultarEventosPorFecha);

// Mostrar eventos próximos a la fecha consultada
router.get('/proximos/:fecha', verificarToken, EventosController.mostrarEventosProximos);

module.exports = router;