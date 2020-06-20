const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, 'Please a subject is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('subject', SubjectSchema);
