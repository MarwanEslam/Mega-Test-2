const mongoose = require('mongoose');

const formRequestSchema = new mongoose.Schema({
  country: String,
  location: String,
  requestType: String,
  message: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FormRequest', formRequestSchema);