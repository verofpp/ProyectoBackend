const EventosModel = require('../models/eventos.m');

class EventosController {
  static async mostrarEventos(req, res) {
    try {
      const eventos = await EventosModel.mostrarEventos();
      res.render('eventos', { resp: eventos });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async buscarEvento(req, res) {
    const idEvento = req.params.id;
    try {
      const evento = await EventosModel.buscarEvento(idEvento);
      res.render('eventos', { resp: evento });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async ingresarEvento(req, res) {
    const nuevoEvento = req.body;
    try {
      const resultado = await EventosModel.ingresarEvento(nuevoEvento);
      res.render('eventos', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async modificarEvento(req, res) {
    const idEvento = req.params.id;
    const nuevaInfoEvento = req.body;
    try {
      const resultado = await EventosModel.modificarEvento(idEvento, nuevaInfoEvento);
      res.render('eventos', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminarEvento(req, res) {
    const idEvento = req.params.id;
    try {
      const resultado = await EventosModel.eliminarEvento(idEvento);
      res.render('eventos', { resp: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static consultarEventosPorFecha(req, res) {
    const fecha = req.params.fecha;
    EventosModel.consultarEventosPorFecha(fecha)
      .then(eventos => {
        res.render('eventos', { resp: eventos });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }

  static mostrarEventosProximos(req, res) {
    const fecha = req.params.fecha;
    EventosModel.mostrarEventosProximos(fecha)
      .then(eventos => {
        res.render('eventos', { resp: eventos });
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }  

}

module.exports = EventosController;