const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  student_Name: {
    type: String,
    required: [true, 'Please name is required'],
  },
  depositor_Name: {
    type: String,
  },
  phone_Number: {
    type: String,
  },
  description: {
    type: String,
  },
  installment: {
    type: String,
    required: [true, 'Please installment is required'],
  },
  Amount: {
    type: String,
    required: [true, 'Please amount is required'],
  },
  receipt: {
    type: String,
  },
  date_paid: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('payment', paymentSchema);
