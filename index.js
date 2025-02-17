import dotenv from 'dotenv';
import app from './src/app.js';
import sequelize from './src/database/database.js';  
import { setupAssociations } from './src/associations.js'; 

import cors from 'cors';
// Call associations setup after all models are loaded
setupAssociations();
dotenv.config();

const PORT = process.env.PORT || 3000;

// Receive requests
app.use(cors());

async function syncModels() {
  try {
    await sequelize.sync({ force: false }); // false: remove this if not dropping tables
    console.log('Models synchronized with the database!');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

async function startServer() {
  try {
    await syncModels();
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}


startServer();
