// handlers/userHandler.js
import { registerUser, loginUser, getUsers } from '../controllers/userController.js';
import { Router } from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/roleMiddleware.js';

const router = Router();

// Registering a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get all users (admin only)
router.get('/users', authenticate, isAdmin, getUsers);

export default router;
