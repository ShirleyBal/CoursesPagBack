import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Token in the 'Authorization' header
  
  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token with a secret key
    req.user = await User.findOne({ where: { id: decoded.id } }); // Get the user based on the token

    if (!req.user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};
