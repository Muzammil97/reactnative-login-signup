// backend/src/routes/authRoutes.js (Updated)
const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Private routes (require authentication)
router.get('/me', protect, getMe);

module.exports = router;