export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied, admin access required.' });
    }
    
    next();  // If the user is an administrator, move to the next middleware or controller
  };
  