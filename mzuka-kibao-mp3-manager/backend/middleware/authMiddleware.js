// Anyiko File Uploader Authentication Middleware

function protectRoute(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }

  const token = authHeader.replace('Bearer ', '');

  req.user = {
    token,
    authenticated: true
  };

  next();
}

module.exports = protectRoute;
