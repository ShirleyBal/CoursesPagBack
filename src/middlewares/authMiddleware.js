// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';  // Modelo de usuario, se supone que existe

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Token en el header 'Authorization'
  
  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token con una clave secreta
    req.user = await User.findOne({ where: { id: decoded.id } }); // Obtén el usuario basado en el token

    if (!req.user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};
