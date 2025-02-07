import express from 'express';
import { createEnrollmentController, getEnrollmentsController, updateEnrollmentController, deleteEnrollmentController } from '../controllers/enrollmentController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Path to create registration (only accessible to admin)
router.post('/enrollments', authenticate, isAdmin, createEnrollmentController);

// Route to get all registrations (accessible to any authenticated user)
router.get('/enrollments', authenticate, getEnrollmentsController);

// Route to update registration (only accessible to admin)
router.put('/enrollments/:enrollment_id', authenticate, isAdmin, updateEnrollmentController);

// Route to delete registration (only accessible to admin)
router.delete('/enrollments/:enrollment_id', authenticate, isAdmin, deleteEnrollmentController);

export default router;
