import express from 'express';
import Course from '../models/courses.js';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('list of courses');
// });


// Get all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.findAll();
    
    // Asegurarnos de convertir los objetos Sequelize a JSON
    const coursesJSON = courses.map(course => course.toJSON());
    
    // Devolver la respuesta como JSON
    res.json(coursesJSON);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
