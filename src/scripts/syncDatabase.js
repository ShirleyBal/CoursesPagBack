import sequelize from '../database/database.js';  // Ahora usa default import
import Course from '../models/courses.js';

(async () => {
  try {
    await sequelize.sync({ force: true }); // Elimina y recrea las tablas
    console.log('Database synchronized and table recreated.');
    process.exit(0); // Finaliza el proceso correctamente
  } catch (error) {
    console.error('Error synchronizing database:', error);
    process.exit(1); // Finaliza con error
  }
})();
