const db = require('./conexion');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Número de rondas de hashing para bcrypt

class UsuariosModel {
  static mostrarUsuarios() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM usuarios';
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener usuarios:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static buscarUsuarioPorCorreo(correoUsuario) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM usuarios WHERE Correo = ?';
      db.query(sql, [correoUsuario], (err, result) => {
        if (err) {
          console.error('Error al buscar usuario por correo:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }
  

  static modificarUsuario(id, nuevoUsuario) {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE usuarios SET ? WHERE Id = ?';
      db.query(sql, [nuevoUsuario, id], (err, result) => {
        if (err) {
          console.error('Error al modificar usuario:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static eliminarUsuario(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM usuarios WHERE id = ?';
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.error('Error al eliminar usuario:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }

  static async agregarUsuario(usuario) {
    try {
      await db.beginTransaction();
      const usuarioQuery = 'INSERT INTO usuarios SET ?';
      const usuarioResult = await db.query(usuarioQuery, {
        Id: usuario.Id,
        Nombre: usuario.Nombre,
        Correo: usuario.Correo,
        Rol: usuario.Rol
      });

      // Si se proporciona una contraseña
      if (usuario.Password) {
        let authQuery;
        if (usuario.Rol === 'Profesor') {
          authQuery = 'INSERT INTO auth SET ?';
        } else if (usuario.Rol === 'Director') {
          authQuery = 'INSERT INTO auth2 SET ?';
        }
        
        if (authQuery) {
          const hashedPassword = await bcrypt.hash(usuario.Password, saltRounds);
          const authResult = await db.query(authQuery, {
            Id: usuario.Id,
            Usuario: usuario.Correo,
            Password: hashedPassword
          });
        }
      }

      await db.commit();
      return { success: true, message: 'Usuario añadido exitosamente' };
    } catch (error) {
      await db.rollback();
      throw error;
    }
  } 

  static buscarUsuarioPorId(idUsuario) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM usuarios WHERE Id = ?';
      db.query(sql, [idUsuario], (err, result) => {
        if (err) {
          console.error('Error al buscar usuario por ID:', err);
          reject('Error interno del servidor');
        } else {
          resolve(result);
        }
      });
    });
  }  
}

module.exports = UsuariosModel;