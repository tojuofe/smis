const Staff = require('../models/staff');
const upload = require('../services/SetPicture');
const cloudinary = require('cloudinary');
require('../services/cloudinary');

// @desc       GET All STAFF
// @route      GET api/staff
// @access     Public
exports.getAllStaff = async (req, res, next) => {
  try {
    const staff = await Staff.find();

    res.status(200).json({ success: true, count: staff.length, data: staff });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       GET STAFF
// @route      GET api/staff/:id
// @access     Private
exports.getStaff = async (req, res, next) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(400).json({ msg: 'Staff not Found' });
    }

    res.status(200).json({ success: true, data: staff });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).send({ msg: 'Staff not Found' });
    }
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       CREATE STAFF
// @route      POST api/staff
// @access     Private
exports.postStaff = async (req, res, next) => {
  upload(req, res, (err) => {
    const file = req.file;

    if (err === 'ERROR: IMAGE ONLY') {
      res.status(400).json({ msg: 'ERROR: IMAGE ONLY' });
    } else if (err) {
      res.status(400).json({ msg: err.message });
    } else {
      try {
        const {
          surName,
          middleName,
          lastName,
          gender,
          date_of_birth,
          house_address,
          phoneNumber1,
          phoneNumber2,
          email,
          place_of_birth,
          religion,
          nationality,
          date_of_employment,
          date_of_registration,
          qualification,
          course_of_study,
          staff_type,
          class_assigned,
          nok_surName,
          nok_middleName,
          nok_lastName,
          nok_gender,
          nok_email,
          nok_phoneNumber1,
          nok_phoneNumber2,
          nok_house_address,
          nok_relationship,
        } = req.body;

        const staffFields = {};
        staffFields.user = req.user.id;
        if (surName) staffFields.surName = surName;
        if (middleName) staffFields.middleName = middleName;
        if (lastName) staffFields.lastName = lastName;
        if (gender) staffFields.gender = gender;
        if (date_of_birth) staffFields.date_of_birth = date_of_birth;
        if (house_address) staffFields.house_address = house_address;
        if (phoneNumber1) staffFields.phoneNumber1 = phoneNumber1;
        if (phoneNumber2) staffFields.phoneNumber2 = phoneNumber2;
        if (email) staffFields.email = email;
        if (place_of_birth) staffFields.place_of_birth = place_of_birth;
        if (religion) staffFields.religion = religion;
        if (nationality) staffFields.nationality = nationality;
        if (date_of_employment)
          staffFields.date_of_employment = date_of_employment;
        if (date_of_registration)
          staffFields.date_of_registration = date_of_registration;
        if (qualification) staffFields.qualification = qualification;
        if (course_of_study) staffFields.course_of_study = course_of_study;
        if (staff_type) staffFields.staff_type = staff_type;
        if (class_assigned) staffFields.class_assigned = class_assigned;

        // Bulid Next of Kin
        staffFields.next_of_kin = {};
        if (nok_surName) staffFields.next_of_kin.nok_surName = nok_surName;
        if (nok_middleName)
          staffFields.next_of_kin.nok_middleName = nok_middleName;
        if (nok_lastName) staffFields.next_of_kin.nok_lastName = nok_lastName;
        if (nok_gender) staffFields.next_of_kin.nok_gender = nok_gender;
        if (nok_email) staffFields.next_of_kin.nok_email = nok_email;
        if (nok_phoneNumber1)
          staffFields.next_of_kin.nok_phoneNumber1 = nok_phoneNumber1;
        if (nok_phoneNumber2)
          staffFields.next_of_kin.nok_phoneNumber2 = nok_phoneNumber2;
        if (nok_house_address)
          staffFields.next_of_kin.nok_house_address = nok_house_address;
        if (nok_relationship)
          staffFields.next_of_kin.nok_relationship = nok_relationship;

        let staff = new Staff(staffFields);
        cloudinary.v2.uploader.upload(file.path).then((result) => {
          staff.img = result.secure_url;
          // Create
          Staff.create(staff);
          res.status(200).json({ success: true, data: staff });
        });
      } catch (err) {
        if (err.name === 'ValidationError') {
          const msgs = Object.values(err.errors).map((val) => val.message);
          return res.status(400).json({
            success: false,
            error: msgs,
          });
        }
        console.log(err.message);
        return res.status(500).json({
          success: false,
          error: 'Server Error',
        });
      }
    }
  });
};

// @desc       UPDATE STAFF
// @route      PUT api/staff/:id
// @access     Private
exports.updateStaff = async (req, res, next) => {
  const {
    surName,
    lastName,
    email,
    house_address,
    phoneNumber1,
    course_of_study,
  } = req.body;

  const newExp = {
    surName,
    lastName,
    email,
    house_address,
    phoneNumber1,
    course_of_study,
  };

  try {
    let staff = await Staff.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: staff });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       UPDATE STAFF
// @route      PUT api/staff/assign/:id
// @access     Private
exports.assignStaffToClass = async (req, res, next) => {
  const { surName, lastName, gender, class_assigned } = req.body;

  const newExp = {
    surName,
    lastName,
    gender,
    class_assigned,
  };

  try {
    let staff = await Staff.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: staff });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
