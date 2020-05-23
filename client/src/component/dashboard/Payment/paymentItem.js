import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentPayment, downloadReceipt } from '../../../action/payment';

const PaymentItem = ({ payment, getCurrentPayment, downloadReceipt }) => {
  const onClick = () => {
    getCurrentPayment(payment);

    downloadReceipt(payment);
  };

  const modalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentPayment(payment);
  };

  return (
    <Fragment>
      <tr key={payment._id}>
        <td data-label='Full Name'>{payment.student_Name}</td>
        <td data-label="Depositor's Name">{payment.depositor_Name}</td>
        <td data-label='Phone Number'>{payment.phone_Number}</td>
        <td data-label='Description'>{payment.description}</td>
        <td data-label='Installment'>{payment.installment}</td>
        <td data-label='Amount'>NGN {payment.Amount}</td>
        <td data-label='Receipt'>{payment.receipt}</td>
        <td data-label='Date Paid'>{payment.date_paid}</td>
        <td data-label='Operation' className='operation'>
          <button type='submit' className='btn' id='open' onClick={modalOpen}>
            Edit
          </button>
          <button type='submit' className='btn' onClick={onClick}>
            Download
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

PaymentItem.propTypes = {
  payment: PropTypes.object.isRequired,
  getCurrentPayment: PropTypes.func.isRequired,
  downloadReceipt: PropTypes.func.isRequired,
};

export default connect(null, { getCurrentPayment, downloadReceipt })(
  PaymentItem
);
