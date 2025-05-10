// backend/src/controllers/authController.js (Updated)
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRE } = require('../config/config');
const bcrypt = require('bcryptjs'); // Need bcrypt for manual password hashing if not using pre-save hook on update
const config = require('../config/config');

// Helper function to generate JWT (remains the same)
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });
};

// @desc    Register new user (remains the same)
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please enter all fields');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password, // Password hashing happens in the pre-save hook
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user & get token (remains the same)
// @route   POST /api/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please enter email and password');
  }

  const user = await User.findOne({ email }).select('+password');

  if (user && (await user.matchPassword(password))) {
    // Re-fetch user without password for the response
    const userResponse = await User.findById(user._id).select('-password');
    res.json({
      _id: userResponse._id,
      name: userResponse.name,
      email: userResponse.email,
      token: generateToken(userResponse._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get user data (using the token) (remains the same)
// @route   GET /api/auth/me
// @access  Private (requires token)
const getMe = asyncHandler(async (req, res) => {
    // req.user is populated by the protect middleware
    res.status(200).json(req.user);
});



module.exports = {
  registerUser,
  loginUser,
  getMe,
};