const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('paymentDescription', descriptionSchema);
