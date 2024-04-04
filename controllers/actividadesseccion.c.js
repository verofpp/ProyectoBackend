const ActividadesSeccionModel = require('../models/actividadesseccion.m');

class ActividadesSeccionController {
  static async mostrarActividadesSeccion(req, res) {
    try {
      const actividadesSeccion = await ActividadesSeccionModel.mostrarActividadesSeccion();
      res.render('actividadesseccion', { resp: actividadesSeccion });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscarActividadSeccion(req, res) {
    const idActividadSeccion = req.params.id;
    try {
      const actividadSeccion = await ActividadesSeccionModel.buscarActividadSeccion(idActividadSeccion);
      res.render('actividadesseccion', { resp: actividadSeccion });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresarActividadSeccion(req, res) {
    const nuevaActividadSeccion = req.body;
    try {
      const resultado = await ActividadesSeccionModel.ingresarActividadSeccion(nuevaActividadSeccion);
      res.render('actividadesseccion', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificarActividadSeccion(req, res) {
    const idActividadSeccion = req.params.id;
    const nuevaInfoActividadSeccion = req.body;
    try {
      const resultado = await ActividadesSeccionModel.modificarActividadSeccion(idActividadSeccion, nuevaInfoActividadSeccion);
      res.render('actividadesseccion', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminarActividadSeccion(req, res) {
    const idActividadSeccion = req.params.id;
    try {
      const resultado = await ActividadesSeccionModel.eliminarActividadSeccion(idActividadSeccion);
      res.render('actividadesseccion', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ActividadesSeccionController;