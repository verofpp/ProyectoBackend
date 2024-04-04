const ProfesoresModel = require('../models/profesores.m');

class ProfesoresController {
  static async mostrarProfesores(req, res) {
    try {
      const profesores = await ProfesoresModel.mostrarProfesores();
      res.render('profesores', { resp: profesores });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscarProfesor(req, res) {
    const idProfesor = req.params.id;
    try {
      const profesor = await ProfesoresModel.buscarProfesor(idProfesor);
      res.render('profesores', { resp: profesor });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresarProfesor(req, res) {
    const nuevoProfesor = req.body;
    try {
      const resultado = await ProfesoresModel.ingresarProfesor(nuevoProfesor);
      res.render('profesores', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificarProfesor(req, res) {
    const idProfesor = req.params.id;
    const nuevaInfoProfesor = req.body;
    try {
      const resultado = await ProfesoresModel.modificarProfesor(idProfesor, nuevaInfoProfesor);
      res.render('profesores', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminarProfesor(req, res) {
    const idProfesor = req.params.id;
    try {
      const resultado = await ProfesoresModel.eliminarProfesor(idProfesor);
      res.render('profesores', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ProfesoresController;