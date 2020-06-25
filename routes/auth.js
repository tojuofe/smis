const express = require('express');
const router = express.Router();
const {
  getAuth,
  postAuth,
  getAuthStaff,
  postAuthStaff,
  getAuthParent,
  postAuthParent,
} = require('../controllers/auth');
const auth = require('../middleware/auth');

router.route('/').get(auth, getAuth).post(postAuth);

router.route('/staff').get(auth, getAuthStaff).post(postAuthStaff);
router.route('/parent').get(auth, getAuthParent).post(postAuthParent);

module.exports = router;
