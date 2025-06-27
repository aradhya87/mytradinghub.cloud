// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  isVerified: { type: Boolean, default: false },
  balance: { type: Number, default: 10000 }, // Default demo balance
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
