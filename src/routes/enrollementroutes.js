// enrollmentRoutes.js
import express from 'express';
import { createEnrollmentController, getEnrollmentsController, updateEnrollmentController, deleteEnrollmentController } from '../controllers/enrollmentController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Ruta para crear inscripción (solo accesible para admin)
router.post('/enrollments', authenticate, isAdmin, createEnrollmentController);

// Ruta para obtener todas las inscripciones (accesible para cualquier usuario autenticado)
router.get('/enrollments', authenticate, getEnrollmentsController);

// Ruta para actualizar inscripción (solo accesible para admin)
router.put('/enrollments/:enrollment_id', authenticate, isAdmin, updateEnrollmentController);

// Ruta para eliminar inscripción (solo accesible para admin)
router.delete('/enrollments/:enrollment_id', authenticate, isAdmin, deleteEnrollmentController);

export default router;
