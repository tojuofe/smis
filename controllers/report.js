const Report = require('../models/report');

// @desc      GET ALL REPORT
// @route     GET api/report
// @access    Public
exports.getReport = async (req, res, next) => {
  try {
    const report = await Report.find();

    res.status(200).json({ success: true, count: report.length, data: report });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc      CREATE REPORT
// @route     POST api/report
// @access    Private
exports.postReport = async (req, res, next) => {
  try {
    const {
      term,
      total,
      name,
      position_or_grade,
      gender,
      teacher_remark,
      class_admitted,
      head_teacher_remark
    } = req.body;

    let report = new Report({
      term,
      total,
      name,
      position_or_grade,
      gender,
      teacher_remark,
      class_admitted,
      head_teacher_remark
    });

    report = await Report.create(report);

    return res.status(200).json({ success: true, data: report });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msgs = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: msgs
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};
