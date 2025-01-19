import express from 'express';

const router = express.Router();

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.send('Lista de cursos');
});

export default router;
