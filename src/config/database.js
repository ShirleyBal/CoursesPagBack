const { Sequelize } = require('sequelize');

// Configuración de la conexión
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false, // Para deshabilitar los logs de SQL
});

module.exports = sequelize;