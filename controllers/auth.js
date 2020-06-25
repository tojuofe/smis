const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Staff = require('../models/staff');
const Student = require('../models/student');

// @desc      GET CURRENT LOGGED IN USER(ADMIN)
// @route     GET api/auth
// @access    Private
exports.getAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       AUTHENICATE USER(ADMIN) AND GET TOKEN
// @route      POST api/auth
// @access     Public
exports.postAuth = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        return res.status(201).json({
          success: true,
          data: token,
        });
      }
    );
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

// @desc      GET CURRENT LOGGED IN USER(STAFF)
// @route     GET api/auth/staff
// @access    Private
exports.getAuthStaff = async (req, res, next) => {
  try {
    const user = await Staff.findById(req.user.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       AUTHENICATE USER(STAFF) AND GET TOKEN
// @route      POST api/auth/staff
// @access     Public
exports.postAuthStaff = async (req, res, next) => {
  try {
    const { email, phoneNumber1 } = req.body;

    let user = await Staff.findOne({ email, phoneNumber1 });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        return res.status(201).json({
          success: true,
          data: token,
        });
      }
    );
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

// @desc      GET CURRENT LOGGED IN USER(PARENT)
// @route     GET api/auth/parent
// @access    Private
exports.getAuthParent = async (req, res, next) => {
  try {
    const parent = await Student.findById(req.user.id);

    return res.status(200).json({
      success: true,
      count: parent.length,
      data: parent,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc       AUTHENICATE USER(PARENT) AND GET TOKEN
// @route      POST api/auth/parent
// @access     Public
exports.postAuthParent = async (req, res, next) => {
  try {
    const { pgi_email, pgi_phoneNumber1 } = req.body;

    let user = await Student.findOne({
      'parent_guardian_info.pgi_email': pgi_email,
      'parent_guardian_info.pgi_phoneNumber1': pgi_phoneNumber1,
    });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        return res.status(201).json({
          success: true,
          data: token,
        });
      }
    );
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msgs = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: msgs,
      });
    } else {
      console.log(err);
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};
