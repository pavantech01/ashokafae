const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    // required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  isOtpVerified: {
    type: Boolean,
    default: false // New field to track OTP verification status
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  verificationToken: String,
  verificationTokenExpiry: Date,
  otp: {
    type: String,
    // required: true
    required: function() {
      return !this.isOtpVerified; // Only required if not verified
    }
  },
  otpExpiry: {
    type: Date,
    // required: true
    required: function() {
      return !this.isOtpVerified; // Only required if not verified
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
