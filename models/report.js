const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please name is required'],
  },
  class_admitted: {
    type: String,
    required: [true, 'Please class is required'],
  },
  term: {
    type: String,
    required: [true, 'Please term is required'],
  },
  exam_type: {
    type: String,
    required: [true, 'Please exam type is required'],
  },
  result: [
    {
      subject: {
        type: String,
        required: [true, 'Please subject is required'],
      },
      score: {
        type: String,
        required: [true, 'Please score is required'],
      },
    },
  ],
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Report = mongoose.model('report', reportSchema);
