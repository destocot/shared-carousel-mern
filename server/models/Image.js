const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, 'too short']
  },
  image: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Image', ImageSchema);