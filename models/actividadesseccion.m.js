const db = require('./conexion');

class ActividadesSeccionModel {
  static mostrarActividadesSeccion() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM actividades_sección';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener actividades de sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscarActividadSeccion(idActividadSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM actividades_sección WHERE Id = ?';
      db.query(sql, [idActividadSeccion], (err, result) => {
        if (err) {
          console.error('Error al buscar actividad de sección por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static ingresarActividadSeccion(nuevaActividadSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO actividades_sección SET ?';
      db.query(sql, nuevaActividadSeccion, (err, result) => {
        if (err) {
          console.error('Error al ingresar actividad de sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static modificarActividadSeccion(idActividadSeccion, nuevaInfoActividadSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE actividades_sección SET ? WHERE Id = ?';
      db.query(sql, [nuevaInfoActividadSeccion, idActividadSeccion], (err, result) => {
        if (err) {
          console.error('Error al modificar actividad de sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminarActividadSeccion(idActividadSeccion) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM actividades_sección WHERE Id = ?';
      db.query(sql, [idActividadSeccion], (err, result) => {
        if (err) {
          console.error('Error al eliminar actividad de sección:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = ActividadesSeccionModel;