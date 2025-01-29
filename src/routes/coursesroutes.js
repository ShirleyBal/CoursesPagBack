// import express from 'express';
// import Course from '../models/courses.js';

// const router = express.Router();

// // Get all courses
// router.get('/courses', async (req, res) => {
//   try {
//     const courses = await Course.findAll();

//     // Asegurarnos de convertir los objetos Sequelize a JSON
//     const coursesJSON = courses.map(course => course.toJSON());

//     // Devolver la respuesta como JSON
//     res.json(coursesJSON);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;

import express from 'express';
import { createCourseController, getCoursesController, updateCourseController, deleteCourseController } from '../controllers/courseController.js';

const router = express.Router();

// Rutas de cursos
router.post('/courses', createCourseController);  // Crear curso
router.get('/courses', getCoursesController);    // Obtener todos los cursos
router.put('/courses/:course_id', updateCourseController);  // Actualizar curso
router.delete('/courses/:course_id', deleteCourseController);  // Eliminar curso

export default router;

