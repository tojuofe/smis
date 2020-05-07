const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc       REGISTER USER AND GENERATE TOKEN
// @route      POST api/auth
// @access     Private
exports.postUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    user = await User.create(user);

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        return res.status(201).json({
          success: true,
          data: token
        });
      }
    );
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
