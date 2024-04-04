const TrimestreModel = require('../models/trimestre.m');

class TrimestreController {
  static async mostrar(req, res) {
    try {
      const trimestres = await TrimestreModel.mostrarTrimestres();
      res.render('trimestre', { resp: trimestres });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscar(req, res) {
    try {
      const idTrimestre = req.params.id;
      const trimestre = await TrimestreModel.buscar(idTrimestre);
      res.render('trimestre', { resp: trimestre });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresar(req, res) {
    try {
      const nuevoTrimestre = req.body;
      const resultado = await TrimestreModel.ingresar(nuevoTrimestre);
      res.render('trimestre', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificar(req, res) {
    try {
      const idTrimestre = req.params.id;
      const nuevaInfoTrimestre = req.body;
      const resultado = await TrimestreModel.modificar(idTrimestre, nuevaInfoTrimestre);
      res.render('trimestre', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const idTrimestre = req.params.id;
      const resultado = await TrimestreModel.eliminar(idTrimestre);
      res.render('trimestre', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async obtenerInicio(req, res) {
    try {
      const idTrimestre = req.params.id;
      const inicio = await TrimestreModel.obtenerInicioPorId(idTrimestre);
      res.json({ inicio });
    } catch (error) {
      res.status(500).send(error);
    }
  }  
}

module.exports = TrimestreController;