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
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
