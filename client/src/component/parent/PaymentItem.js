import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PaymentItem = ({ payment, user }) => {
  const userName = `${user && user.parent_guardian_info.pgi_surName} ${
    user && user.parent_guardian_info.pgi_lastName
  }`;

  return (
    <Fragment>
      <div className='my-1'>
        {userName === payment.depositor_Name && (
          <li>Description: {payment.description}</li>
        )}
        {userName === payment.depositor_Name && (
          <li>Installment: {payment.installment}</li>
        )}
        {userName === payment.depositor_Name && (
          <li>Amount: NGN {payment.Amount}</li>
        )}
      </div>
    </Fragment>
  );
};

PaymentItem.propTypes = {
  payment: PropTypes.object,
  user: PropTypes.object,
};

export default PaymentItem;
