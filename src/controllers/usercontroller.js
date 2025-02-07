// controllers/userController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken'; // Para generar el token JWT

// Función para registrar un usuario
export const registerUser = async (req, res) => {
  try {
    const { name, last_name, mail, password, role } = req.body;

    // Verifica si ya existe un usuario con ese correo
    const existingUser = await User.findOne({ where: { mail } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use.' });
    }

    // Crea el nuevo usuario
    const user = await User.create({ name, last_name, mail, password, role });
    res.status(201).json({ message: 'User registered successfully.', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Función para iniciar sesión (autenticación)
export const loginUser = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({ where: { mail } });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.user_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful.', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Function to get all users (only accessible to administrators)
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};
