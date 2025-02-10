import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cursoRoutes from './routes/coursesroutes.js';
import filterRoutes from './routes/filterRoutes.js'

// Create the Express Application
const app = express();

// Configure middlewares
app.use(cors()); // Allow requests from any origin (configurable later)
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); // To handle URL-encoded data

// Example routes
app.get('/', (req, res) => {
  res.send('¡Server running correctly!');
});

// Dynamic routes (example, courses)
app.use('/api/courses', cursoRoutes); // Associate routes with a prefix
app.use("/api/courses/filter", filterRoutes); // course filters

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

export default app;
