const Class = require('../models/class');
const Subject = require('../models/subject');

// @desc       GET CLASS
// @route      GET api/class
// @access     Public
exports.getClass = async (req, res, next) => {
  try {
    const _class = await Class.find();

    res.status(200).json({ success: true, count: _class.length, data: _class });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       CREATE CLASS
// @route      POST api/class
// @access     Private
exports.postClass = async (req, res, next) => {
  try {
    const { class_admitted } = req.body;

    let class_admit = await Class.findOne({ class_admitted });

    if (class_admit) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Class already exists' }] });
    }

    class_admit = new Class({ class_admitted });

    class_admit = await Class.create(class_admit);

    return res.status(200).json({ success: true, data: class_admit });
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

// @desc       GET CLASS EXAM TYPE
// @route      GET api/class/examtype
// @access     Public
exports.getExamType = async (req, res, next) => {
  try {
    const examType = await ExamType.find();

    res
      .status(200)
      .json({ success: true, count: examType.length, data: examType });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       CREATE EXAM TYPE
// @route      POST api/class/examtype
// @access     Private
exports.postExamType = async (req, res, next) => {
  try {
    const { exam_type } = req.body;

    let examType = await ExamType.findOne({ exam_type });

    examType = new ExamType({ exam_type });

    examType = await ExamType.create(examType);

    return res.status(200).json({ success: true, data: examType });
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

// @desc       GET CLASS SUBJECT
// @route      GET api/class/subject
// @access     Public
exports.getSubject = async (req, res, next) => {
  try {
    const subject = await Subject.find();

    res
      .status(200)
      .json({ success: true, count: subject.length, data: subject });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       CREATE SUBJECT
// @route      POST api/class/subject
// @access     Private
exports.postSubject = async (req, res, next) => {
  try {
    const { subject } = req.body;

    let sub_ject = await Subject.findOne({ subject });

    sub_ject = new Subject({ subject });

    sub_ject = await Subject.create(sub_ject);

    return res.status(200).json({ success: true, data: sub_ject });
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
