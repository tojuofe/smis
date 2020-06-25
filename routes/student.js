const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllStudent,
  postStudent,
  getStudent,
  post_rStudent,
  promoteStudent,
  editStudent,
  postStudResult,
} = require('../controllers/student');

router.route('/').get(getAllStudent).post(auth, postStudent);

router.route('/result').post(auth, postStudResult);

router.route('/rStudent').post(auth, post_rStudent);

router.route('/user/:id').get(getStudent).put(auth, promoteStudent);
router.route('/:id').put(auth, editStudent);

module.exports = router;
