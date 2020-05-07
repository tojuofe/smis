const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  img: {
    type: String,
  },
  surName: {
    type: String,
    required: [true, 'Please enter a Surname'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Please enter a Lastname'],
  },
  gender: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  house_address: {
    type: String,
  },
  phoneNumber1: {
    type: String,
  },
  phoneNumber2: {
    type: String,
  },
  email: {
    type: String,
  },
  place_of_birth: {
    type: String,
  },
  religion: {
    type: String,
  },
  nationality: {
    type: String,
  },
  date_of_employment: {
    type: String,
  },
  date_of_registration: {
    type: String,
  },
  qualification: {
    type: String,
  },
  course_of_study: {
    type: String,
  },
  staff_type: {
    type: String,
  },
  class_assigned: {
    type: String,
  },
  next_of_kin: {
    nok_surName: {
      type: String,
    },
    nok_middleName: {
      type: String,
    },
    nok_lastName: {
      type: String,
    },
    nok_gender: {
      type: String,
    },
    nok_email: {
      type: String,
    },
    nok_phoneNumber1: {
      type: String,
    },
    nok_phoneNumber2: {
      type: String,
    },
    nok_house_address: {
      type: String,
    },
    nok_relationship: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('staff', StaffSchema);
