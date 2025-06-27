const mongoose = require('mongoose')

const kycSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  idNumber: { type: String, required: true },
  frontIdPath: { type: String, required: true },
  backIdPath: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('KYC', kycSchema)
