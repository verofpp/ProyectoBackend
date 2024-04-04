const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuarios.c');
const { verificarToken2 } = require('../middlewares/middleware');

// Mostrar todos los usuarios
router.get('/', UsuariosController.mostrarUsuarios);

// Buscar un usuario por ID
router.get('/:id', UsuariosController.buscarUsuarioPorId);

// Buscar un usuario por correo
router.get('/:correo', UsuariosController.buscarUsuarioPorCorreo);

// Ingresar un nuevo usuario
router.post('/', UsuariosController.agregarUsuario);

// Modificar un usuario
router.put('/:id', verificarToken2, UsuariosController.modificarUsuario);

// Eliminar un usuario
router.delete('/:id', verificarToken2, UsuariosController.eliminarUsuario);

module.exports = router;