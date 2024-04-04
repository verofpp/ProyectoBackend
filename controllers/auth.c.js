const AuthModel = require('../models/auth.m');

class AuthController {
  static async mostrarUsuarios(req, res) {
    try {
      const usuarios = await AuthModel.mostrarUsuarios();
      res.render('auth', { resp: usuarios });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async mostrarFormularioLogin(req, res) {
    res.render('login');
  }

  static async iniciarSesion(req, res) {
    const { Usuario, Password } = req.body;
    try {
      const token = await AuthModel.generarToken(Usuario, Password);
      res.render('loginexitoso', { token });
    } catch (error) {
      res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
  }

  static async generarToken(req, res) {
    const { Usuario, Password } = req.body;
    try {
      const token = await AuthModel.generarToken(Usuario, Password);
      res.render('loginexitoso', { token });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = AuthController;

