import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPayment, getDescription } from '../../../action/payment';
import { getStudents } from '../../../action/student';
import PropTypes from 'prop-types';

// Component
import NavSm from '../navs/nav-sm';
import Navlg from '../navs/nav-lg';
import tabControl from '../../js/main';
import Alert from '../../layout/Alert';
import PaymentEdit from './paymentEdit';
import PaymentForm from './paymentForm';
import PaymentView from './paymentView';
import PaymentDescription from './paymentDescription';

const Payment = ({ getPayment, getStudents, getDescription }) => {
  useEffect(() => {
    tabControl();
    getPayment();
    getStudents();
    getDescription();
  }, [getPayment, getStudents, getDescription]);

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
              <PaymentForm />
              <PaymentView />
            </div>
            <PaymentEdit />
            <PaymentDescription />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Payment.propTypes = {
  getPayment: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  getDescription: PropTypes.func.isRequired,
};

export default connect(null, {
  getPayment,
  getStudents,
  getDescription,
})(Payment);
