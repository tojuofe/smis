import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPayment } from '../../../action/payment';

const PaymentForm = ({ createPayment, students, descriptions }) => {
  const [formData, setFormData] = useState({
    student_Name: '',
    depositor_Name: '',
    phone_Number: '',
    description: '',
    installment: '',
    Amount: '',
    receipt: '',
    date_paid: '',
  });

  const {
    student_Name,
    depositor_Name,
    phone_Number,
    description,
    installment,
    Amount,
    receipt,
    date_paid,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createPayment(formData);
    setFormData({
      student_Name: '',
      depositor_Name: '',
      phone_Number: '',
      description: '',
      installment: '',
      Amount: '',
      receipt: '',
      date_paid: '',
    });
  };

  const modalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('editModal');

    if (open) {
      modal.classList.add('show-modal');
    }
  };

  return (
    <Fragment>
      <div className='staff'>
        <div className='staff-form active' id='newstu'>
          <div className='card'>
            <div className='card-form'>
              <h2 className='text-center'>Enter Payment Details</h2>
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label htmlFor='nameofstudent'>Name of Student</label>
                  <select
                    name='student_Name'
                    value={student_Name}
                    onChange={onChange}
                    required
                  >
                    <option>Select</option>
                    {students.map((student) => (
                      <option
                        key={student._id}
                        value={`${student.surName} ${student.lastName}`}
                      >{`${student.surName} ${student.lastName}`}</option>
                    ))}
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='nameofdepositor'>Name of Depositor</label>
                  <input
                    type='text'
                    placeholder='Depositor Name'
                    name='depositor_Name'
                    value={depositor_Name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phonenumber'>Phone Number</label>
                  <input
                    type='text'
                    placeholder='Phone Number'
                    name='phone_Number'
                    value={phone_Number}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='description'>Description</label>
                  <select
                    name='description'
                    value={description}
                    onChange={onChange}
                    required
                  >
                    <option>-- Select --</option>
                    {descriptions.map((desc) => (
                      <option key={desc._id} value={desc.description}>
                        {desc.description}
                      </option>
                    ))}
                  </select>
                  <small className='popUpLink' onClick={modalOpen}>
                    Create Description
                  </small>
                </div>
                <div className='form-group'>
                  <label htmlFor='installment'>Installment</label>
                  <select
                    name='installment'
                    value={installment}
                    onChange={onChange}
                    required
                  >
                    <option>Select</option>
                    <option value='Installment'>Installment</option>
                    <option value='Complete Payment'>Complete Payment</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='Amount'>Amount</label>
                  <input
                    type='number'
                    placeholder='Amount'
                    name='Amount'
                    value={Amount}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='receipt'>Receipt No</label>
                  <input
                    type='text'
                    placeholder='Receipt No'
                    name='receipt'
                    value={receipt}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date'>Date</label>
                  <input
                    type='date'
                    name='date_paid'
                    value={date_paid}
                    onChange={onChange}
                    required
                  />
                </div>
                <input
                  type='submit'
                  value='Make Payment'
                  className='btn mt-1'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PaymentForm.propTypes = {
  createPayment: PropTypes.func,
  students: PropTypes.array,
  descriptions: PropTypes.array,
};

const mapStateToProps = ({
  student: { students },
  payment: { descriptions },
}) => ({
  students,
  descriptions,
});

const mapDispatchToProps = (dispatch) => ({
  createPayment: (formData) => dispatch(createPayment(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
