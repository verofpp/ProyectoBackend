const Auth2Model = require('../models/auth2.m');

class Auth2Controller {
  static async mostrarUsuarios(req, res) {
    try {
      const usuarios = await Auth2Model.mostrarUsuarios();
      res.render('auth2', { resp: usuarios });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async generarToken(req, res) {
    const { Usuario, Password } = req.body;
    try {
      const token = await Auth2Model.generarToken(Usuario, Password);
      res.render('loginexitoso', { token });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = Auth2Controller;
