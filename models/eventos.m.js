const db = require('./conexion');

class EventosModel {
  static mostrarEventos() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM eventos';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener eventos:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscarEvento(idEvento) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM eventos WHERE ID = ?';
      db.query(sql, [idEvento], (err, result) => {
        if (err) {
          console.error('Error al buscar evento por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresarEvento(nuevoEvento) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO eventos SET ?';
      db.query(sql, nuevoEvento, (err, result) => {
        if (err) {
          console.error('Error al ingresar evento:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificarEvento(idEvento, nuevaInfoEvento) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE eventos SET ? WHERE ID = ?';
      db.query(sql, [nuevaInfoEvento, idEvento], (err, result) => {
        if (err) {
          console.error('Error al modificar evento:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminarEvento(idEvento) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM eventos WHERE ID = ?';
      db.query(sql, [idEvento], (err, result) => {
        if (err) {
          console.error('Error al eliminar evento:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static consultarEventosPorFecha(fecha) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM eventos WHERE Fecha = ?';
      db.query(sql, [fecha], (err, result) => {
        if (err) {
          console.error('Error al consultar eventos por fecha:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static mostrarEventosProximos(fecha) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM eventos WHERE Fecha BETWEEN ? AND DATE_ADD(?, INTERVAL 14 DAY)';
      db.query(sql, [fecha, fecha], (err, result) => {
        if (err) {
          console.error('Error al mostrar eventos próximos:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = EventosModel;