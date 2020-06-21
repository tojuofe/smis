import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginStaff } from '../../action/auth';
import Alert from '../layout/Alert';

const StaffLogin = ({ loginStaff }) => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber1: '',
  });
  const { email, phoneNumber1 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginStaff({ email, phoneNumber1 });
  };

  return (
    <Fragment>
      <div className='container'>
        <Alert />
        <div className='login-form'>
          <h1>Staff Login</h1>
          <p>Enter Correct Details</p>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                placeholder='Email Address'
                value={email}
                name='email'
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={phoneNumber1}
                name='phoneNumber1'
                onChange={onChange}
                required
              />
            </div>
            <input type='submit' value='Login' className='btn btn-block mt-1' />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

StaffLogin.propTypes = {
  loginStaff: PropTypes.func.isRequired,
};

export default connect(null, { loginStaff })(StaffLogin);
