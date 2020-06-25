import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginParent } from '../../action/auth';
import Alert from '../layout/Alert';

const ParentLogin = ({ loginParent }) => {
  const [formData, setFormData] = useState({
    pgi_email: '',
    pgi_phoneNumber1: '',
  });

  const { pgi_email, pgi_phoneNumber1 } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    loginParent({ pgi_email, pgi_phoneNumber1 });
  };

  return (
    <Fragment>
      <div className='container'>
        <Alert />
        <div className='login-form'>
          <h1>Parent Login</h1>
          <p>Enter Correct Details</p>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                placeholder='Email Address'
                value={pgi_email}
                name='pgi_email'
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={pgi_phoneNumber1}
                name='pgi_phoneNumber1'
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

ParentLogin.propTypes = {
  loginParent: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginParent: (text) => dispatch(loginParent(text)),
});

export default connect(null, mapDispatchToProps)(ParentLogin);
