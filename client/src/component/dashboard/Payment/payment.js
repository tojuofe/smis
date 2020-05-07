import React, { useEffect, Fragment, useState, useRef } from 'react';
import { connect } from 'react-redux';
import {
  createPayment,
  getPayment,
  filterPayment,
} from '../../../action/payment';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import PropTypes from 'prop-types';

// Component
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';
import tabControl from '../../js/main';
import Spinner from '../../layout/Spinner';
import Alert from '../../layout/Alert';
import PaymentItem from './paymentItem';

const Payment = ({
  createPayment,
  getPayment,
  payment: { payments, loading, filtered },
  filterPayment,
}) => {
  const text = useRef('');

  const [formData, setFormData] = useState({
    student_Name: '',
    depositor_Name: '',
    phone_Number: '',
    description: '',
    installment: '',
    Amount: '',
    date_paid: '',
  });

  const {
    student_Name,
    depositor_Name,
    phone_Number,
    description,
    installment,
    Amount,
    date_paid,
  } = formData;

  useEffect(() => {
    tabControl();
    getPayment();
  }, [getPayment]);

  const getAllPayment =
    filtered !== null
      ? filtered.map((payment) => (
          <PaymentItem key={payment._id} payment={payment} />
        ))
      : payments.map((payment) => (
          <PaymentItem key={payment._id} payment={payment} />
        ));

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChangeFilter = (e) => {
    filterPayment(e.target.value);
  };

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
      date_paid: '',
    });
  };

  return (
    <Fragment>
      <NavSm />
      <div id='dashboard-container'>
        <div className='dashboard'>
          <Navlg />
          <div className='dashboard-right bg-secondary'>
            <Alert />
            <div className='student'>
              <div className='student-btn'>
                <button className='btnclick active' data-id='newstu'>
                  Make Payment
                </button>
                <button className='btnclick' data-id='retstu'>
                  View Payment
                </button>
              </div>
              <div className='staff'>
                <div className='staff-form active' id='newstu'>
                  <div className='card'>
                    <div className='card-form'>
                      <h2 className='text-center'>Enter Payment Details</h2>
                      <form onSubmit={onSubmit}>
                        <div className='form-group'>
                          <label htmlFor='nameofstudent'>Name of Student</label>
                          <input
                            type='text'
                            placeholder='Student Name'
                            name='student_Name'
                            value={student_Name}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='nameofdepositor'>
                            Name of Depositor
                          </label>
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
                          <input
                            type='text'
                            placeholder='Description'
                            name='description'
                            value={description}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='installment'>Installment</label>
                          <input
                            type='text'
                            placeholder='Installment'
                            name='installment'
                            value={installment}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='Amount'>Amount</label>
                          <input
                            type='text'
                            placeholder='Amount'
                            name='Amount'
                            value={Amount}
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

              <div className='staff'>
                <div className='staff-form' id='retstu'>
                  <div className='display-card'>
                    <div className='flex space-btw pb-1'>
                      <input
                        type='search'
                        ref={text}
                        placeholder='Search...'
                        className='search'
                        onChange={onChangeFilter}
                      />
                      <ReactHTMLTableToExcel
                        className='btn'
                        table='payment'
                        filename='ParentExcel'
                        sheet='Sheet'
                        buttonText='Export to Excel'
                      />
                    </div>
                    {payments !== null && !loading ? (
                      <table className='table' id='payment'>
                        <thead>
                          <tr>
                            <th>Full Name</th>
                            <th>Depositor's Name</th>
                            <th>Phone Number</th>
                            <th>Description</th>
                            <th>Installment</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Operation</th>
                          </tr>
                        </thead>
                        <tbody>{getAllPayment}</tbody>
                      </table>
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Payment.propTypes = {
  payment: PropTypes.object.isRequired,
  getPayment: PropTypes.func.isRequired,
  filterPayment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  payment: state.payment,
});

export default connect(mapStateToProps, {
  createPayment,
  getPayment,
  filterPayment,
})(Payment);
