const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
  host     : 'localhost',
       user     : process.env.DB_USER,
       password : process.env.DB_PASSWORD,
       database : process.env.DB_DATABASE,
       port:process.env.DB_PORT
  // otras opciones de configuración, si las tienes
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error al conectarse a la base de datos: ', error , process.env);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
  connection.release();
});

pool.query = (query, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
        return;
      }

      connection.query(query, values, (error, results) => {
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  });
};

process.on('exit', () => {
  pool.end();
});

module.exports = pool;