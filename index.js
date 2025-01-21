import dotenv from 'dotenv';
import app from './src/app.js';
import { sequelize } from './src/database/database.js';
import { setupAssociations } from './src/associations.js';
import './src/models/students.js';
import './src/models/courses.js';
import './src/models/enrollment.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Setup associations
setupAssociations();

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

async function syncModels() {
  try {
    await sequelize.sync({ force: true });
    console.log('Models synchronized with the database!');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

syncModels();
