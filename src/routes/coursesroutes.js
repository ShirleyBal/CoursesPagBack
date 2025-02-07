import express from 'express';
import { createCourseController, getCoursesController, updateCourseController, deleteCourseController } from '../controllers/coursecontroller.js';

const router = express.Router();

// Routes
router.post('/courses', createCourseController);  // Create course
router.get('/courses', getCoursesController);    // Get all courses
router.put('/courses/:course_id', updateCourseController);  // Update course
router.delete('/courses/:course_id', deleteCourseController);  // Delete course

export default router;

