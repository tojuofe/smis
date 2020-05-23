import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updatePayment } from '../../../action/payment';
import { modalClose, alertScroll } from '../../js/main';

const PaymentEdit = ({ current, dispatch }) => {
  const [studentName, setStudentName] = useState('');
  const [depositor_Name, setDepositor_Name] = useState('');
  const [description, setDescription] = useState('');
  const [installment, setInstallment] = useState('');
  const [Amount, setAmount] = useState('');
  const [receipt, setReceipt] = useState('');

  useEffect(() => {
    if (current) {
      setStudentName(current.student_Name);
      setDepositor_Name(current.depositor_Name);
      setDescription(current.description);
      setInstallment(current.installment);
      setAmount(current.Amount);
      setReceipt(current.receipt);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updatePayment({
        id: current._id,
        depositor_Name,
        description,
        installment,
        Amount,
        receipt,
      })
    );
    alertScroll();
  };

  return (
    <Fragment>
      <div className='modal-container' id='modal'>
        <div className='modal'>
          <button className='close-btn' id='close' onClick={modalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-header'>
            <h3>Payment Details</h3>
          </div>
          <div className='modal-content'>
            <form className='modal-form' onSubmit={onSubmit}>
              <div>
                <label htmlFor='firstname'>Full Name</label>
                <input
                  type='text'
                  name='studentName'
                  value={studentName || ''}
                  className='form-input'
                  onChange={(e) => setStudentName(e.target.value)}
                  disabled
                />
              </div>
              <div>
                <label htmlFor='depositor_name'>Depositor's Name</label>
                <input
                  type='text'
                  name='depositor_Name'
                  value={depositor_Name || ''}
                  className='form-input'
                  onChange={(e) => setDepositor_Name(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  name='description'
                  value={description || ''}
                  className='form-input'
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='installment'>Installment</label>
                <input
                  type='text'
                  name='installment'
                  value={installment || ''}
                  className='form-input'
                  onChange={(e) => setInstallment(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='Amount'>Amount</label>
                <input
                  type='text'
                  name='Amount'
                  value={Amount || ''}
                  className='form-input'
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='Receipt'>Receipt</label>
                <input
                  type='text'
                  name='receipt'
                  value={receipt || ''}
                  className='form-input'
                  onChange={(e) => setReceipt(e.target.value)}
                />
              </div>
              <input
                type='submit'
                value='Submit'
                className='btn'
                onClick={modalClose}
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PaymentEdit.propTypes = {
  current: PropTypes.object,
  updatePayment: PropTypes.func,
};

const mapStateToProps = ({ payment: { current } }) => ({
  current,
});

export default connect(mapStateToProps)(PaymentEdit);
