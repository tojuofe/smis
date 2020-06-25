import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from './layout/Navbar';
import Result from './Result';
import Alert from '../layout/Alert';

import { loadParent } from '../../action/auth';
import { getStudentResult } from '../../action/parent';

const Profile = ({ getStudentResult, loadParent }) => {
  const [formData, setFormData] = useState({
    surName: '',
    lastName: '',
  });

  const { surName, lastName } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getStudentResult(formData);
    setFormData({
      surName: '',
      lastName: '',
    });
  };

  useEffect(() => {
    loadParent();
  }, [loadParent]);

  return (
    <Fragment>
      <Navbar />
      <div className='profile'>
        <Alert />
        <h2 className='my-1'>Check Student Result</h2>
        <div className='my-1'>
          <form onSubmit={onSubmit}>
            <div className='parent'>
              <div className='parent-input'>
                <input
                  type='text'
                  placeholder='Enter Firstname'
                  name='surName'
                  value={surName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='parent-input'>
                <input
                  type='text'
                  placeholder='Enter Lastname'
                  name='lastName'
                  value={lastName}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className='parent-input'>
              <input type='submit' value='Submit' className='btn' />
            </div>
          </form>
        </div>
        <Result />
      </div>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getStudentResult: (formData) => dispatch(getStudentResult(formData)),
  loadParent: () => dispatch(loadParent()),
});

Profile.propTypes = {
  getStudentResult: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Profile);
