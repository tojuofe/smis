const express = require('express');
const router = express.Router();
const { getAuth, postAuth } = require('../controllers/auth');
const auth = require('../middleware/auth');

router
  .route('/')
  .get(auth, getAuth)
  .post(postAuth);

module.exports = router;
