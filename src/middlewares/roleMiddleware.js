// middlewares/roleMiddleware.js
export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied, admin access required.' });
    }
    
    next();  // Si el usuario es administrador, pasa al siguiente middleware o controlador
  };
  