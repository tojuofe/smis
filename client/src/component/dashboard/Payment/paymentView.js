import React, { Fragment, useRef } from 'react';
import { connect } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import PropTypes from 'prop-types';

import { filterPayment } from '../../../action/payment';
import Spinner from '../../layout/Spinner';
import PaymentItem from './paymentItem';

const PaymentView = ({ payments, loading, filtered, filterPayment }) => {
  const text = useRef('');

  const getAllPayment =
    filtered !== null
      ? filtered.map((payment) => (
          <PaymentItem key={payment._id} payment={payment} />
        ))
      : payments.map((payment) => (
          <PaymentItem key={payment._id} payment={payment} />
        ));

  const onChangeFilter = (e) => {
    filterPayment(e.target.value);
  };

  return (
    <Fragment>
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
                    <th>Receipt</th>
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
    </Fragment>
  );
};

PaymentView.propTypes = {
  payments: PropTypes.array,
  loading: PropTypes.bool,
  filtered: PropTypes.array,
  filterPayment: PropTypes.func.isRequired,
};

const mapStateToProps = ({ payment: { payments, loading, filtered } }) => ({
  payments,
  loading,
  filtered,
});

const mapDispatchToProps = (dispatch) => ({
  filterPayment: (text) => dispatch(filterPayment(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentView);
