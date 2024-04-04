const db = require('./conexion');

class SeccionesModel {
  static mostrarSecciones() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM secciones';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener secciones:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscarSeccion(idSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM secciones WHERE ID = ?';
      db.query(sql, [idSeccion], (err, result) => {
        if (err) {
          console.error('Error al buscar sección por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresarSeccion(nuevaSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO secciones SET ?';
      db.query(sql, nuevaSeccion, (err, result) => {
        if (err) {
          console.error('Error al ingresar sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificarSeccion(idSeccion, nuevaInfoSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE secciones SET ? WHERE ID = ?';
      db.query(sql, [nuevaInfoSeccion, idSeccion], (err, result) => {
        if (err) {
          console.error('Error al modificar sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminarSeccion(idSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM secciones WHERE ID = ?';
      db.query(sql, [idSeccion], (err, result) => {
        if (err) {
          console.error('Error al eliminar sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = SeccionesModel;