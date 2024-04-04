const SeccionesModel = require('../models/secciones.m');

class SeccionesController {
  static async mostrarSecciones(req, res) {
    try {
      const secciones = await SeccionesModel.mostrarSecciones();
      res.render('secciones', { resp: secciones });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscarSeccion(req, res) {
    const idSeccion = req.params.id;
    try {
      const seccion = await SeccionesModel.buscarSeccion(idSeccion);
      res.render('secciones', { resp: seccion });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresarSeccion(req, res) {
    const nuevaSeccion = req.body;
    try {
      const resultado = await SeccionesModel.ingresarSeccion(nuevaSeccion);
      res.render('secciones', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificarSeccion(req, res) {
    const idSeccion = req.params.id;
    const nuevaInfoSeccion = req.body;
    try {
      const resultado = await SeccionesModel.modificarSeccion(idSeccion, nuevaInfoSeccion);
      res.render('secciones', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminarSeccion(req, res) {
    const idSeccion = req.params.id;
    try {
      const resultado = await SeccionesModel.eliminarSeccion(idSeccion);
      res.render('secciones', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = SeccionesController;