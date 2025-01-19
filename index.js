import dotenv from 'dotenv'; // Importar dotenv
import app from './src/app.js'; // Importar configuración de la aplicación

// Cargar variables de entorno
dotenv.config();

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

