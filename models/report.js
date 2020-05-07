const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  term: {
    type: String,
    required: [true, 'Please term is required']
  },
  total: {
    type: String,
    required: [true, 'Please total is required']
  },
  name: {
    type: String,
    required: [true, 'Please name is required']
  },
  position_or_grade: {
    type: String,
    required: [true, 'Please position or grade is required']
  },
  gender: {
    type: String
  },
  teacher_remark: {
    type: String,
    required: [true, 'Please teacher remark is required']
  },
  class_admitted: {
    type: String,
    required: [true, 'Please class is required']
  },
  head_teacher_remark: {
    type: String,
    required: [true, 'Please head teacher remark is required']
  }
});

module.exports = mongoose.model('report', paymentSchema);
