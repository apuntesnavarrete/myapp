const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
/*
const setupModels = require('../db/models/user.model')
*/
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',port: process.env.DB_PORT, 
    dialect: 'mysql',
    
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
  /*
 const db = {}
 db.Sequelize = Sequelize
 db.sequelize = sequelize

db.users = require('../db/models/user.model')(sequelize, DataTypes)



db.sequelize.sync()
*/
/*
setupModels(sequelize)
sequelize.sync();
*/
  module.exports = {sequelize}