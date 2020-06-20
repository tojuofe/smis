const express = require('express');
const router = express.Router();
const {
  getClass,
  postClass,
  getExamType,
  postExamType,
  getSubject,
  postSubject,
} = require('../controllers/class');
const auth = require('../middleware/auth');

router.route('/').get(getClass).post(auth, postClass);

router.route('/examtype').get(getExamType).post(auth, postExamType);
router.route('/subject').get(getSubject).post(auth, postSubject);

module.exports = router;
