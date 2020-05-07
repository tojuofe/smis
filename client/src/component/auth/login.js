import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../action/auth';
import Alert from '../layout/Alert';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <div className='container'>
        <Alert />
        <div className='login-form'>
          <h1>Login</h1>
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
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                name='password'
                onChange={onChange}
              />
            </div>
            <input type='submit' value='Login' className='btn btn-block mt-1' />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
