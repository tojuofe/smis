const express = require('express');
const router = express.Router();
const { getClass, postClass } = require('../controllers/class');
const auth = require('../middleware/auth');

router
  .route('/')
  .get(getClass)
  .post(auth, postClass);

module.exports = router;
