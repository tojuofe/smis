const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getReport, postReport } = require('../controllers/report');

router
  .route('/')
  .get(getReport)
  .post(auth, postReport);

module.exports = router;
