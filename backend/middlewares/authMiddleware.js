const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
};

module.exports = { authMiddleware }; // Ensure it's correctly exported
