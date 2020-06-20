const Student = require('../models/student');
const pdf = require('html-pdf');
const pdfTemplate = require('./result');

// @desc      GET ALL REPORT
// @route     GET api/report
// @access    Public
exports.getReport = async (req, res, next) => {
  try {
    const report = await Student.find(
      {},
      'img surName middleName lastName class_admitted term exam_type result'
    );

    res.status(200).json({ success: true, count: report.length, data: report });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc      CREATE REPORT
// @route     POST api/report/:id
// @access    Private
exports.postReport = async (req, res, next) => {
  try {
    const { term, subject, score } = req.body;

    const newExp = {
      subject,
      score,
    };

    let report = await Student.findById(req.params.id);

    if (term === '1st') {
      report.result.first_term.unshift(newExp);
      await report.save();
      return res.status(200).json({ success: true, data: report });
    } else if (term === '2nd') {
      report.result.second_term.unshift(newExp);
      await report.save();
      return res.status(200).json({ success: true, data: report });
    } else {
      report.result.third_term.unshift(newExp);
      await report.save();
      return res.status(200).json({ success: true, data: report });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    DELETE RESULT FOR STUDENT
// @route   DELETE api/report/:id
// @access  PRIVATE

exports.deleteReport = async (req, res, next) => {
  try {
    const { term } = req.body;

    const report = await Student.findById(req.params.id);

    if (term === '1st') {
      // Get RemoveIndex
      const removeIndex = report.result.first_term.map((item) => item._id);
      report.result.first_term.splice(removeIndex);
      await report.save();
      return res.status(200).json({ success: true, data: report });
    } else if (term === '2nd') {
      // Get RemoveIndex
      const removeIndex = report.result.second_term.map((item) => item._id);
      report.result.second_term.splice(removeIndex);
      await report.save();
      return res.status(200).json({ success: true, data: report });
    } else {
      // Get RemoveIndex
      const removeIndex = report.result.third_term.map((item) => item._id);
      report.result.third_term.splice(removeIndex);
      await report.save();
      return res.status(200).json({ success: true, data: report });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc        GET RESULT
// @route       GET api/report/result
// @access      Public
exports.getResult = async (req, res, next) => {
  await res.sendFile(`${__dirname}/result/result.pdf`);
};

// @desc        CREATE RESULT
// @route       POST api/report/result
// @access      Private
exports.postResult = async (req, res, next) => {
  await pdf
    .create(pdfTemplate(req.body), {})
    .toFile('./controllers/result/result.pdf', (err) => {
      if (err) {
        res.send(Promise.reject());
      }

      res.send(Promise.resolve());
    });
};
