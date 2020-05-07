const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  class_admitted: {
    type: String,
    required: [true, 'Please a class is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('class', ClassSchema);
