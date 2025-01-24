import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cursoRoutes from './routes/coursesroutes.js';// Importar las rutas de cursos
// Crear la aplicación Express

const app = express();

// Configurar middlewares
app.use(cors()); // Permitir solicitudes desde cualquier origen (configurable más adelante)
app.use(bodyParser.json()); // Para manejar JSON en el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false })); // Para manejar datos codificados en URL

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Server running correctly!');
});

// Rutas dinámicas (ejemplo, cursos)

app.use('/api', cursoRoutes); // Asociar las rutas con un prefijo

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

export default app;
