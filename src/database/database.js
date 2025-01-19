const Sequelize = require('sequelize');

const sequelize = new Sequelize('CoursesPagBack', 'postgres', 'Qwerty1997', {
   host: 'localhost',
   dialect: 'postgres'
});

module.exports = { sequelize };
