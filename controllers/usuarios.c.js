const UsuariosModel = require('../models/usuarios.m');

class UsuariosController {
  static async mostrarUsuarios(req, res) {
    try {
      const usuarios = await UsuariosModel.mostrarUsuarios();
      res.render('usuarios', { resp: usuarios });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscarUsuarioPorCorreo(req, res) {
    const correoUsuario = req.params.correo;
    try {
      const usuario = await UsuariosModel.buscarUsuarioPorCorreo(correoUsuario);
      res.render('usuarios', { resp: usuario });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  

  static async agregarUsuario(req, res) {
    const nuevoUsuario = req.body;
    try {
      const resultado = await UsuariosModel.agregarUsuario(nuevoUsuario);
      res.render('usuarios', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificarUsuario(req, res) {
    const idUsuario = req.params.id;
    const nuevaInfoUsuario = req.body;
    try {
      const resultado = await UsuariosModel.modificarUsuario(idUsuario, nuevaInfoUsuario);
      res.render('usuarios', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminarUsuario(req, res) {
    const idUsuario = req.params.id;
    try {
      const resultado = await UsuariosModel.eliminarUsuario(idUsuario);
      res.render('usuarios', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscarUsuarioPorId(req, res) {
    const idUsuario = req.params.id;
    try {
      const usuario = await UsuariosModel.buscarUsuarioPorId(idUsuario);
      res.render('usuarios', { resp: usuario });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = UsuariosController;