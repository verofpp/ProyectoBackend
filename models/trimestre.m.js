const db = require('./conexion');

class TrimestreModel {
  static mostrarTrimestres() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM trimestre';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener trimestres:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscar(idTrimestre) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM trimestre WHERE Id = ?';
      db.query(sql, [idTrimestre], (err, result) => {
        if (err) {
          console.error('Error al buscar trimestre por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresar(nuevoTrimestre) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO trimestre (Inicio, Fin) VALUES (?, ?)';
      db.query(sql, [nuevoTrimestre.Inicio, nuevoTrimestre.Fin], (err, result) => {
        if (err) {
          console.error('Error al ingresar trimestre:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificar(idTrimestre, nuevaInfoTrimestre) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE trimestre SET Inicio = ?, Fin = ? WHERE Id = ?';
      db.query(sql, [nuevaInfoTrimestre.Inicio, nuevaInfoTrimestre.Fin, idTrimestre], (err, result) => {
        if (err) {
          console.error('Error al modificar trimestre:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminar(idTrimestre) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM trimestre WHERE Id = ?';
      db.query(sql, [idTrimestre], (err, result) => {
        if (err) {
          console.error('Error al eliminar trimestre:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static obtenerInicioPorId(idTrimestre) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT Inicio FROM trimestre WHERE Id = ?';
      db.query(sql, [idTrimestre], (err, result) => {
        if (err) {
          console.error('Error al obtener inicio por ID:', err);
          reject('Error interno del servidor');
        } else {
          // Devolvemos solo el inicio, ya que estamos seleccionando solo esa columna
          resolve(result[0].Inicio);
        }
      });
    });
  }
}

module.exports = TrimestreModel;

