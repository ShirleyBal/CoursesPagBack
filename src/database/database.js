import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('CoursesPagBack', 'postgres', 'Qwerty1997', {
  host: 'localhost',
  dialect: 'postgres',
});

export { sequelize };