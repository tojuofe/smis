const Payment = require('../models/payment');
const pdf = require('html-pdf');
const pdfTemplate = require('./result');

// @desc        GET ALL PAYMENT
// @route       GET api/payment
// @access      Public
exports.getPayment = async (req, res, next) => {
  try {
    const payment = await Payment.find();

    res
      .status(200)
      .json({ success: true, count: payment.length, data: payment });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc        REGISTER PAYMENT
// @route       POST api/payment
// @access      Private
exports.postPayment = async (req, res, next) => {
  try {
    const {
      student_Name,
      depositor_Name,
      phone_Number,
      description,
      installment,
      Amount,
      date_paid,
    } = req.body;

    let payment = new Payment({
      student_Name,
      depositor_Name,
      phone_Number,
      description,
      installment,
      Amount,
      date_paid,
    });

    payment = await Payment.create(payment);

    return res.status(200).json({ success: true, data: payment });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msgs = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: msgs,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

// @desc        GET PAYMENT RECEIPT
// @route       GET api/payment/receipt
// @access      Public
exports.getReceipt = async (req, res, next) => {
  await res.sendFile(`${__dirname}/result/receipt.pdf`);
};

// @desc        CREATE PAYMENT RECEIPT
// @route       POST api/payment/receipt
// @access      Private
exports.postReceipt = async (req, res, next) => {
  await pdf
    .create(pdfTemplate(req.body), {})
    .toFile('./controllers/result/receipt.pdf', (err) => {
      if (err) {
        res.send(Promise.reject());
      }

      res.send(Promise.resolve());
    });
};
