const MateriasModel = require('../models/materias.m');

class MateriasController {
  static async mostrar(req, res) {
    try {
      const materias = await MateriasModel.mostrarMaterias();
      res.render('materias', { resp: materias });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscar(req, res) {
    try {
      const idMateria = req.params.id;
      const materia = await MateriasModel.buscar(idMateria);
      res.render('materias', { resp: materia });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresar(req, res) {
    try {
      const nuevaMateria = req.body;
      const resultado = await MateriasModel.ingresar(nuevaMateria);
      res.render('materias', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificar(req, res) {
    try {
      const idMateria = req.params.id;
      const nuevaInfoMateria = req.body;
      const resultado = await MateriasModel.modificar(idMateria, nuevaInfoMateria);
      res.render('materias', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const idMateria = req.params.id;
      const resultado = await MateriasModel.eliminar(idMateria);
      res.render('materias', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async actividadesPorMateria(req, res) {
    try {
      const idMateria = req.params.id;
      const materia = await MateriasModel.buscar(idMateria);
      const resp = await MateriasModel.actividadesPorMateria(idMateria);
      res.render('actividadesPorMateria', { materia, resp });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = MateriasController;