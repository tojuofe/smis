const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
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
  place_of_birth: {
    type: String,
  },
  religion: {
    type: String,
  },
  nationality: {
    type: String,
  },
  state_of_origin: {
    type: String,
  },
  emergency_contact: {
    type: String,
  },
  class_admitted: {
    type: String,
  },
  date_of_registration: {
    type: String,
  },
  exam_type: {
    type: String,
    default: 'Exam',
  },
  result: {
    first_term: [
      {
        subject: {
          type: String,
        },
        score: {
          type: String,
        },
      },
    ],
    second_term: [
      {
        subject: {
          type: String,
        },
        score: {
          type: String,
        },
      },
    ],
    third_term: [
      {
        subject: {
          type: String,
        },
        score: {
          type: String,
        },
      },
    ],
  },
  parent_guardian_info: {
    pgi_surName: {
      type: String,
    },
    pgi_middleName: {
      type: String,
    },
    pgi_lastName: {
      type: String,
    },
    pgi_occupation: {
      type: String,
    },
    pgi_email: {
      type: String,
    },
    pgi_phoneNumber1: {
      type: String,
    },
    pgi_phoneNumber2: {
      type: String,
    },
    pgi_house_address: {
      type: String,
    },
    pgi_work_address: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('student', StudentSchema);
