const db = require('./conexion');

class MateriasModel {
  static mostrarMaterias() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM materias';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener materias:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscar(idMateria) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM materias WHERE ID = ?';
      db.query(sql, [idMateria], (err, result) => {
        if (err) {
          console.error('Error al buscar materia por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresar(nuevaMateria) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO materias SET ?';
      db.query(sql, nuevaMateria, (err, result) => {
        if (err) {
          console.error('Error al ingresar materia:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificar(idMateria, nuevaInfoMateria) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE materias SET ? WHERE ID = ?';
      db.query(sql, [nuevaInfoMateria, idMateria], (err, result) => {
        if (err) {
          console.error('Error al modificar materia:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminar(idMateria) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM materias WHERE ID = ?';
      db.query(sql, [idMateria], (err, result) => {
        if (err) {
          console.error('Error al eliminar materia:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static actividadesPorMateria(idMateria) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT Id, Actividad, Semana FROM actividades WHERE Materia = ?';
      db.query(sql, [idMateria], (err, result) => {
        if (err) {
          console.error('Error al obtener actividades por materia:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = MateriasModel;