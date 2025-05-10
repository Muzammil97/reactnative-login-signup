// Load environment variables from .env file
require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000, // Default to 5000 if PORT is not set
  MONGO_URI: process.env.MONGO_URI, // Your MongoDB connection string
  JWT_SECRET: process.env.JWT_SECRET, // Secret key for signing JWTs
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d', // Token expiration time
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10, // Salt rounds for bcrypt
};