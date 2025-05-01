const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
  },
  status: {
    type: String,
    enum: ['draft', 'live', 'cancelled'],
    default: 'draft'
  },
  category: {
    type: String,
    required: [true, 'Event category is required'],
  },
  image: {
    public_id: String, // Cloudinary public ID
    url: String        // Cloudinary URL
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


const Event = mongoose.model('Event', eventSchema);

module.exports = {Event};