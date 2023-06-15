require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',port: process.env.DB_PORT, 
    dialect: 'mysql',
    
  });

  module.exports = {
    development:{
        sequelize
    },
    production:{
        sequelize
    }
  }