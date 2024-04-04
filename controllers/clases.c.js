const ClasesModel = require('../models/clases.m');

class ClasesController {
  static async mostrar(req, res) {
    try {
      const clases = await ClasesModel.mostrarClases();
      res.render('clases', { resp: clases });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscar(req, res) {
    try {
      const idClase = req.params.id;
      const clase = await ClasesModel.buscar(idClase);
      res.json('clases', { resp: clase });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresar(req, res) {
    try {
      const nuevaClase = req.body;
      const resultado = await ClasesModel.ingresar(nuevaClase);
      res.render('clases', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificar(req, res) {
    try {
      const idClase = req.params.id;
      const nuevaInfoClase = req.body;
      const resultado = await ClasesModel.modificar(idClase, nuevaInfoClase);
      res.render('clases', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const idClase = req.params.id;
      const resultado = await ClasesModel.eliminar(idClase);
      res.render('clases', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async obtenerMateria(req, res) {
    try {
      const idClase = req.params.id;
      const materia = await ClasesModel.obtenerMateria(idClase);
      res.json({ materia });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async obtenerHorario(req, res) {
    try {
      const idClase = req.params.id;
      const horario = await ClasesModel.obtenerHorarioPorId(idClase);
      res.json({ horario });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ClasesController;