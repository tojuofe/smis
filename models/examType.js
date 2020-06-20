const mongoose = require('mongoose');

const ExamTypeSchema = new mongoose.Schema({
  exam_type: {
    type: String,
    required: [true, 'Please a exam type is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('examtype', ExamTypeSchema);
