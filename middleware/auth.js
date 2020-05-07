const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get Token from Header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No Token, Authorization Denied' });
  }

  try {
    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
