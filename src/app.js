// Importar dependencias
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Crear la aplicación Express
const app = express();

// Configurar middlewares
app.use(cors()); // Permitir solicitudes desde cualquier origen (configurable más adelante)
app.use(bodyParser.json()); // Para manejar JSON en el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true })); // Para manejar datos codificados en URL

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Rutas dinámicas (ejemplo, cursos)
import cursoRoutes from './routes/cursos.js';// Importar las rutas de cursos
app.use('/api/cursos', cursoRoutes); // Asociar las rutas con un prefijo

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor.' });
});

export default app;
