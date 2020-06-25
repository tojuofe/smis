import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from './layout/Navbar';
import { loadParent } from '../../action/auth';
import { getDescription, getPayment } from '../../action/payment';
import PaymentItem from './PaymentItem';

const Payment = ({
  loadParent,
  descriptions,
  payments,
  user,
  getDescription,
  getPayment,
}) => {
  useEffect(() => {
    loadParent();
    getDescription();
    getPayment();
  }, [loadParent, getDescription, getPayment]);

  return (
    <Fragment>
      <Navbar />
      <div className='profile'>
        <div className='profile-cover p-1 my-2'>
          <h2>Outstanding Payment</h2>
          {descriptions.map((desc) => (
            <li key={desc._id}>{desc.description}</li>
          ))}
        </div>
        <div className='profile-cover p-1'>
          <h2>Payment Made</h2>
          {payments.map((payment) => (
            <PaymentItem key={payment._id} payment={payment} user={user} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Payment.propTypes = {
  descriptions: PropTypes.array,
  payments: PropTypes.array,
};

const mapStateToProps = ({
  payment: { descriptions, payments },
  auth: { user },
}) => ({
  descriptions,
  payments,
  user,
});

export default connect(mapStateToProps, {
  loadParent,
  getDescription,
  getPayment,
})(Payment);
