const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  class_admitted: {
    type: String,
    required: [true, 'Please a class is required'],
    unique: true,
  },
  exam_type: {
    type: String,
  },
  subject: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('class', ClassSchema);
