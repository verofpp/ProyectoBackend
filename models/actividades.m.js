const db = require('./conexion');

class ActividadesModel {
  static mostrarActividades() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM actividades';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener actividades:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscar(idActividad) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM actividades WHERE Id = ?';
      db.query(sql, [idActividad], (err, result) => {
        if (err) {
          console.error('Error al buscar actividad por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresar(nuevaActividad) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO actividades SET ?';
      db.query(sql, nuevaActividad, (err, result) => {
        if (err) {
          console.error('Error al ingresar actividad:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificar(idActividad, nuevaInfoActividad) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE actividades SET ? WHERE Id = ?';
      db.query(sql, [nuevaInfoActividad, idActividad], (err, result) => {
        if (err) {
          console.error('Error al modificar actividad:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminar(idActividad) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM actividades WHERE Id = ?';
      db.query(sql, [idActividad], (err, result) => {
        if (err) {
          console.error('Error al eliminar actividad:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static obtenerMateria(idActividad) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT materia FROM actividades WHERE Id = ?';
      db.query(sql, [idActividad], (err, result) => {
        if (err) {
          console.error('Error al obtener materia de actividad:', err);
          reject('Error interno del servidor');
        } else {
          if (result.length === 0) {
            reject('No se encontró la actividad con el ID especificado');
          } else {
            resolve(result[0].materia);
          }
        }
      });
    });
  }

  static obtenerSemana(idActividad) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT semana FROM actividades WHERE Id = ?';
      db.query(sql, [idActividad], (err, result) => {
        if (err) {
          console.error('Error al obtener semana de actividad:', err);
          reject('Error interno del servidor');
        } else {
          if (result.length === 0) {
            reject('No se encontró la actividad con el ID especificado');
          } else {
            resolve(result[0].semana);
          }
        }
      });
    });
  }
}

module.exports = ActividadesModel;