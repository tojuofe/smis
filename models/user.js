const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please name is required']
  },
  email: {
    type: String,
    required: [true, 'Please email is required'],
    unique: true,
    validate: {
      validator: function(value) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: 'Please enter a valid email'
    }
  },
  password: {
    type: String,
    required: [true, 'Please enter a password with 6 or more characters'],
    minlength: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
