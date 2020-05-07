const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllStaff,
  postStaff,
  getStaff,
  updateStaff,
  assignStaffToClass,
} = require('../controllers/staff');

router.route('/').get(getAllStaff).post(auth, postStaff);

router.route('/:id').get(getStaff).put(auth, updateStaff);
router.route('/assign/:id').put(auth, assignStaffToClass);

module.exports = router;
