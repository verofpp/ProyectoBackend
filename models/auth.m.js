const db = require('./conexion');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secreto = process.env.SECRETO;

class AuthModel {
  static mostrarUsuarios() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM auth';
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

  static generarToken(Usuario, Password) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM auth WHERE Usuario = ?';
      db.query(sql, [Usuario], async (err, result) => {
        if (err) {
          console.error('Error al obtener usuario:', err);
          reject('Error interno del servidor');
        } else {
          if (result.length === 0) {
            reject('Usuario no encontrado');
          } else {
            const user = result[0];
            const passwordMatch = await bcrypt.compare(Password, user.Password);
            if (!passwordMatch) {
              reject('Contraseña incorrecta');
            } else {
              const token = jwt.sign({ Id: user.Id, Usuario: user.Usuario }, secreto, { expiresIn: '1h' });
              resolve(token);
            }
          }
        }
      });
    });
  }
}

module.exports = AuthModel;