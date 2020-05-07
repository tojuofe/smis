const Class = require('../models/class');

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

    let class_admit = new Class({ class_admitted });

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
