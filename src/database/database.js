import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('courses_db', 'postgres', 'Qwerty1997', {
  host: 'localhost',
  dialect: 'postgres',
});

export { sequelize };