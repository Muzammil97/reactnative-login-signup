// backend/src/models/User.js (Updated)
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Encrypt password using bcrypt ONLY if the password field is modified
userSchema.pre('save', async function (next) {
  // 'this' refers to the document being saved
  if (!this.isModified('password')) {
    return next(); // If password wasn't modified, move on
  }

  const salt = await bcrypt.genSalt(config.BCRYPT_SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare entered password to hashed password in DB
userSchema.methods.matchPassword = async function (enteredPassword) {
  const user = await this.model('User').findById(this._id).select('+password');
  if (!user) return false;
  return await bcrypt.compare(enteredPassword, user.password);
};


module.exports = mongoose.model('User', userSchema);