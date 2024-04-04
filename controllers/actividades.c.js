const ActividadesModel = require('../models/actividades.m');

class ActividadesController {
  static async mostrar(req, res) {
    try {
      const actividades = await ActividadesModel.mostrarActividades();
      res.render('actividades', { resp: actividades });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscar(req, res) {
    try {
      const idActividad = req.params.id;
      const actividad = await ActividadesModel.buscar(idActividad);
      res.render('actividades', { resp: actividad });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresar(req, res) {
    try {
      const nuevaActividad = req.body;
      const resultado = await ActividadesModel.ingresar(nuevaActividad);
      res.render('actividades', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificar(req, res) {
    try {
      const idActividad = req.params.id;
      const nuevaInfoActividad = req.body;
      const resultado = await ActividadesModel.modificar(idActividad, nuevaInfoActividad);
      res.render('actividades', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const idActividad = req.params.id;
      const resultado = await ActividadesModel.eliminar(idActividad);
      res.render('actividades', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async obtenerMateria(req, res) {
    try {
      const idActividad = req.params.id;
      const materia = await ActividadesModel.obtenerMateria(idActividad);
      res.json({ materia });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async obtenerSemana(req, res) {
    try {
      const idActividad = req.params.id;
      const semana = await ActividadesModel.obtenerSemana(idActividad);
      res.json({ semana });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ActividadesController;