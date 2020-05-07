const Student = require('../models/student');
const rStudent = require('../models/rStudent');
const upload = require('../setProfilePic/SetPicture');

// @desc       GET All STUDENT
// @route      GET api/student
// @access     Public
exports.getAllStudent = async (req, res, next) => {
  try {
    const student = await Student.find();

    res
      .status(200)
      .json({ success: true, count: student.length, data: student });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       GET All STUDENT SPECIFIC DETAILS
// @route      GET api/student/studentDetails
// @access     Public
exports.getStud = async (req, res, next) => {
  try {
    const student = await Student.find(
      {},
      'surName middleName lastName gender date_of_birth class_admitted'
    );

    res
      .status(200)
      .json({ success: true, count: student.length, data: student });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       GET CURRENT STUDENT
// @route      GET api/student/user/:id
// @access     Public
exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(400).json({ msg: 'Student not Found' });
    }

    res.status(200).json({ success: true, data: student });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).send({ msg: 'Student not Found' });
    }
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       CREATE STUDENT
// @route      POST api/student
// @access     Private
exports.postStudent = async (req, res, next) => {
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
          place_of_birth,
          religion,
          nationality,
          state_of_origin,
          emergency_contact,
          class_admitted,
          date_of_registration,
          pgi_surName,
          pgi_middleName,
          pgi_lastName,
          pgi_occupation,
          pgi_email,
          pgi_phoneNumber1,
          pgi_phoneNumber2,
          pgi_house_address,
          pgi_work_address,
        } = req.body;

        const studentFields = {};
        studentFields.user = req.user.id;
        if (surName) studentFields.surName = surName;
        if (middleName) studentFields.middleName = middleName;
        if (lastName) studentFields.lastName = lastName;
        if (gender) studentFields.gender = gender;
        if (date_of_birth) studentFields.date_of_birth = date_of_birth;
        if (house_address) studentFields.house_address = house_address;
        if (place_of_birth) studentFields.place_of_birth = place_of_birth;
        if (religion) studentFields.religion = religion;
        if (nationality) studentFields.nationality = nationality;
        if (state_of_origin) studentFields.state_of_origin = state_of_origin;
        if (emergency_contact)
          studentFields.emergency_contact = emergency_contact;
        if (class_admitted) studentFields.class_admitted = class_admitted;
        if (date_of_registration)
          studentFields.date_of_registration = date_of_registration;

        // Bulid Parent / Guardian Information
        studentFields.parent_guardian_info = {};
        if (pgi_surName)
          studentFields.parent_guardian_info.pgi_surName = pgi_surName;
        if (pgi_middleName)
          studentFields.parent_guardian_info.pgi_middleName = pgi_middleName;
        if (pgi_lastName)
          studentFields.parent_guardian_info.pgi_lastName = pgi_lastName;
        if (pgi_occupation)
          studentFields.parent_guardian_info.pgi_occupation = pgi_occupation;
        if (pgi_email) studentFields.parent_guardian_info.pgi_email = pgi_email;
        if (pgi_phoneNumber1)
          studentFields.parent_guardian_info.pgi_phoneNumber1 = pgi_phoneNumber1;
        if (pgi_phoneNumber2)
          studentFields.parent_guardian_info.pgi_phoneNumber2 = pgi_phoneNumber2;
        if (pgi_house_address)
          studentFields.parent_guardian_info.pgi_house_address = pgi_house_address;
        if (pgi_work_address)
          studentFields.parent_guardian_info.pgi_work_address = pgi_work_address;

        let student = new Student(studentFields);
        student.img = file.path.slice(14, 45);
        // Create
        Student.create(student);
        res.status(200).json({ success: true, data: student });
      } catch (err) {
        if (err.name === 'ValidationError') {
          const msgs = Object.values(err.errors).map((val) => val.message);
          return res.status(400).json({
            success: false,
            error: msgs,
          });
        }
        return res.status(500).json({
          success: false,
          error: 'Server Error',
        });
      }
    }
  });
};

// @desc       CREATE RETURNING STUDENT
// @route      POST api/student/rStudent
// @access     Private
exports.post_rStudent = async (req, res, next) => {
  const {
    rSurName,
    rMiddleName,
    rLastName,
    rGender,
    rDate_of_birth,
    rHouse_address,
    rPlace_of_birth,
    rReligion,
    rNationality,
    rState_of_origin,
    rEmergency_contact,
    rClass_admitted,
    rDate_of_registration,
    rPgi_surName,
    rPgi_middleName,
    rPgi_lastName,
    rPgi_occupation,
    rPgi_email,
    rPgi_phoneNumber1,
    rPgi_phoneNumber2,
    rPgi_house_address,
    rPgi_work_address,
  } = req.body;

  try {
    const studentFields = {};
    studentFields.user = req.user.id;
    if (rSurName) studentFields.rSurName = rSurName;
    if (rMiddleName) studentFields.rMiddleName = rMiddleName;
    if (rLastName) studentFields.rLastName = rLastName;
    if (rGender) studentFields.rGender = rGender;
    if (rDate_of_birth) studentFields.rDate_of_birth = rDate_of_birth;
    if (rHouse_address) studentFields.rHouse_address = rHouse_address;
    if (rPlace_of_birth) studentFields.rPlace_of_birth = rPlace_of_birth;
    if (rReligion) studentFields.rReligion = rReligion;
    if (rNationality) studentFields.rNationality = rNationality;
    if (rState_of_origin) studentFields.rState_of_origin = rState_of_origin;
    if (rEmergency_contact)
      studentFields.rEmergency_contact = rEmergency_contact;
    if (rClass_admitted) studentFields.rClass_admitted = rClass_admitted;
    if (rDate_of_registration)
      studentFields.rDate_of_registration = rDate_of_registration;

    // Bulid Parent / Guardian Information
    studentFields.rParent_guardian_info = {};
    if (rPgi_surName)
      studentFields.rParent_guardian_info.rPgi_surName = rPgi_surName;
    if (rPgi_middleName)
      studentFields.rParent_guardian_info.rPgi_middleName = rPgi_middleName;
    if (rPgi_lastName)
      studentFields.rParent_guardian_info.rPgi_lastName = rPgi_lastName;
    if (rPgi_occupation)
      studentFields.rParent_guardian_info.rPgi_occupation = rPgi_occupation;
    if (rPgi_email) studentFields.rParent_guardian_info.rPgi_email = rPgi_email;
    if (rPgi_phoneNumber1)
      studentFields.rParent_guardian_info.rPgi_phoneNumber1 = rPgi_phoneNumber1;
    if (rPgi_phoneNumber2)
      studentFields.rParent_guardian_info.rPgi_phoneNumber2 = rPgi_phoneNumber2;
    if (rPgi_house_address)
      studentFields.rParent_guardian_info.rPgi_house_address = rPgi_house_address;
    if (rPgi_work_address)
      studentFields.rParent_guardian_info.rPgi_work_address = rPgi_work_address;

    // Create
    let rstudent = new rStudent(studentFields);
    rstudent = await rStudent.create(rstudent);
    return res.status(200).json({ success: true, data: rstudent });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msgs = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: msgs,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

// @desc       PROMOTE STUDENT
// @route      PUT api/student/user/:id
// @access     Private
exports.promoteStudent = async (req, res, next) => {
  const {
    surName,
    middleName,
    lastName,
    gender,
    date_of_birth,
    class_admitted,
  } = req.body;

  const newExp = {
    surName,
    middleName,
    lastName,
    gender,
    date_of_birth,
    class_admitted,
  };

  try {
    let student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: student });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       UPDATE STUDENT
// @route      PUT api/student/:id
// @access     Private
exports.editStudent = async (req, res, next) => {
  const {
    surName,
    middleName,
    lastName,
    house_address,
    emergency_contact,
  } = req.body;

  const newExp = {
    surName,
    middleName,
    lastName,
    house_address,
    emergency_contact,
  };

  try {
    let student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: student });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
