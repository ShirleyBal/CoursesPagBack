import dotenv from 'dotenv';
import app from './src/app.js';
import { sequelize } from './src/database/database.js';
import { setupAssociations } from './src/associations.js';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 3000;

// Configurar las relaciones
setupAssociations();

// Sincronizar modelos con la base de datos
async function syncModels() {
  try {
    await sequelize.sync({ force: true }); // false: elimina
    console.log('Models synchronized with the database!');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

// Iniciar el servidor y sincronizar modelos
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

// Ejecutar el servidor
startServer();
