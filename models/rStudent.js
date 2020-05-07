const mongoose = require('mongoose');

const rStudentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  rSurName: {
    type: String,
    required: [true, 'Please enter a Surname'],
  },
  rMiddleName: {
    type: String,
  },
  rLastName: {
    type: String,
    required: [true, 'Please enter a Lastname'],
  },
  rGender: {
    type: String,
  },
  rDate_of_birth: {
    type: String,
  },
  rHouse_address: {
    type: String,
  },
  rPlace_of_birth: {
    type: String,
  },
  rReligion: {
    type: String,
  },
  rNationality: {
    type: String,
  },
  rState_of_origin: {
    type: String,
  },
  rEmergency_contact: {
    type: String,
  },
  rClass_admitted: {
    type: String,
  },
  rDate_of_registration: {
    type: String,
  },
  rParent_guardian_info: {
    rPgi_surName: {
      type: String,
    },
    rPgi_middleName: {
      type: String,
    },
    rPgi_lastName: {
      type: String,
    },
    rPgi_occupation: {
      type: String,
    },
    rPgi_email: {
      type: String,
    },
    rPgi_phoneNumber1: {
      type: String,
    },
    rPgi_phoneNumber2: {
      type: String,
    },
    rPgi_house_address: {
      type: String,
    },
    rPgi_work_address: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('return_Student', rStudentSchema);
