const express = require('express');
const router = express.Router();
const {
  postPayment,
  getPayment,
  postReceipt,
  getReceipt,
  updatePayment,
} = require('../controllers/payment');
const auth = require('../middleware/auth');

router.route('/').post(auth, postPayment).get(getPayment);

router.route('/receipt').post(auth, postReceipt).get(getReceipt);

router.route('/:id').put(auth, updatePayment);

module.exports = router;
