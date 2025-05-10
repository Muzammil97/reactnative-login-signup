// backend/src/index.js (Updated)
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { PORT } = require('./config/config');
const authRoutes = require('./routes/authRoutes');

// Error handling middleware (basic example)
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};


// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount Routes
app.use('/api/auth', authRoutes);

// Basic Error Handling Middleware (after routes)
app.use(notFound);
app.use(errorHandler);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
