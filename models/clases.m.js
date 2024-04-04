const db = require('./conexion');

class ClasesModel {
  static mostrarClases() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clases';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener clases:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscar(idClase) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM clases WHERE Id = ?';
      db.query(sql, [idClase], (err, result) => {
        if (err) {
          console.error('Error al buscar clase por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresar(nuevaClase) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO clases SET ?';
      db.query(sql, nuevaClase, (err, result) => {
        if (err) {
          console.error('Error al ingresar clase:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificar(idClase, nuevaInfoClase) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE clases SET ? WHERE Id = ?';
      db.query(sql, [nuevaInfoClase, idClase], (err, result) => {
        if (err) {
          console.error('Error al modificar clase:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminar(idClase) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM clases WHERE Id = ?';
      db.query(sql, [idClase], (err, result) => {
        if (err) {
          console.error('Error al eliminar clase:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static obtenerMateria(idClase) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT Id_Materia FROM clases WHERE Id = ?';
      db.query(sql, [idClase], (err, result) => {
        if (err) {
          console.error('Error al obtener materia de clase:', err);
          reject('Error interno del servidor');
        } else {
          if (result.length === 0) {
            reject('No se encontró la clase con el ID especificado');
          } else {
            resolve(result[0].Id_Materia);
          }
        }
      });
    });
  }

  static obtenerHorarioPorId(idClase) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT Horario FROM clases WHERE Id = ?';
      db.query(sql, [idClase], (err, result) => {
        if (err) {
          console.error('Error al obtener horario por ID:', err);
          reject('Error interno del servidor');
        } else {
          // Devolvemos solo el horario, ya que estamos seleccionando solo esa columna
          resolve(result[0].Horario);
        }
      });
    });
  }
}

module.exports = ClasesModel;