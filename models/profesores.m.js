const db = require('./conexion');

class ProfesoresModel {
  static mostrarProfesores() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM profesores';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener profesores:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscarProfesor(idProfesor) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM profesores WHERE ID = ?';
      db.query(sql, [idProfesor], (err, result) => {
        if (err) {
          console.error('Error al buscar profesor por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresarProfesor(nuevoProfesor) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO profesores SET ?';
      db.query(sql, nuevoProfesor, (err, result) => {
        if (err) {
          console.error('Error al ingresar profesor:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificarProfesor(idProfesor, nuevaInfoProfesor) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE profesores SET ? WHERE ID = ?';
      db.query(sql, [nuevaInfoProfesor, idProfesor], (err, result) => {
        if (err) {
          console.error('Error al modificar profesor:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminarProfesor(idProfesor) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM profesores WHERE ID = ?';
      db.query(sql, [idProfesor], (err, result) => {
        if (err) {
          console.error('Error al eliminar profesor:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = ProfesoresModel;