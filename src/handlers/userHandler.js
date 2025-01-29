// handlers/userHandler.js
import { registerUser, loginUser, getUsers } from '../controllers/userController.js';
import { Router } from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/roleMiddleware.js';

const router = Router();

// Registro de un nuevo usuario
router.post('/register', registerUser);

// Inicio de sesión de usuario
router.post('/login', loginUser);

// Obtener todos los usuarios (solo admin)
router.get('/users', authenticate, isAdmin, getUsers);

export default router;
