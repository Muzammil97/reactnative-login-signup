const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler'); // Simple middleware for handling exceptions inside of async express routes
const User = require('../models/User');
const { JWT_SECRET } = require('../config/config');

// Middleware to protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check for token in the Authorization header (Bearer Token)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]; // Format is "Bearer TOKEN"

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Attach user from token payload (excluding password) to the request object
      // This makes the user available in subsequent route handlers
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        res.status(401); // Unauthorized
        throw new Error('User not found');
      }

      next(); // Proceed to the next middleware or route handler

    } catch (error) {
      console.error(error);
      res.status(401); // Unauthorized
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401); // Unauthorized
    throw new Error('Not authorized, no token');
  }
});

// Add a simple async handler helper if not using a library like express-async-handler
// (If you install 'express-async-handler', you don't need this)
// const asyncHandler = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch(next);
// };


module.exports = { protect };