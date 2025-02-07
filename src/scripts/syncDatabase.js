import sequelize from '../database/database.js';
import Course from '../models/courses.js';

(async () => {
  try {
    await sequelize.sync({ force: false }); // Drop and recreate tables
    console.log('Database synchronized and table recreated.');
    process.exit(0); // The process ends successfully
  } catch (error) {
    console.error('Error synchronizing database:', error);
    process.exit(1); // Ends with error
  }
})();
