import express from 'express';

const router = express.Router();

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.send('list of courses');
});

export default router;
