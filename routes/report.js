const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getReport,
  postReport,
  deleteReport,
  postResult,
  getResult,
} = require('../controllers/report');

router.route('/').get(getReport);
router.route('/result').post(auth, postResult).get(getResult);
router.route('/:id').post(auth, postReport).delete(auth, deleteReport);

module.exports = router;
