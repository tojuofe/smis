import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateStaff } from '../../../action/staff';

import { modalClose, alertScroll } from '../../js/main';

const StaffEdit = ({ current, updateStaff }) => {
  const [surName, setSurName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [house_address, setHouseAddress] = useState('');
  const [phoneNumber1, setPhoneNumbers] = useState('');
  const [course_of_study, setCourse_of_study] = useState('');

  useEffect(() => {
    if (current) {
      setSurName(current.surName);
      setLastName(current.lastName);
      setEmail(current.email);
      setHouseAddress(current.house_address);
      setPhoneNumbers(current.phoneNumber1);
      setCourse_of_study(current.course_of_study);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateStaff({
      id: current._id,
      surName,
      lastName,
      email,
      house_address,
      phoneNumber1,
      course_of_study,
    });
    alertScroll();
  };

  return (
    <Fragment>
      <div className='modal-container' id='modal'>
        <div className='modal'>
          <button className='close-btn' id='close' onClick={modalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-header'>
            <h3>Edit Staff Details</h3>
          </div>
          <div className='modal-content'>
            <form className='modal-form' onSubmit={onSubmit}>
              <div>
                <label htmlFor='firstname'>FirstName</label>
                <input
                  type='text'
                  name='surName'
                  value={surName || ''}
                  className='form-input'
                  onChange={(e) => setSurName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='lastname'>LastName</label>
                <input
                  type='text'
                  name='lastName'
                  value={lastName || ''}
                  className='form-input'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  value={email || ''}
                  className='form-input'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='houseaddress'>House Address</label>
                <input
                  type='text'
                  name='house_address'
                  value={house_address || ''}
                  className='form-input'
                  onChange={(e) => setHouseAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='phonenumber'>Phone Number</label>
                <input
                  type='text'
                  name='phoneNumber1'
                  value={phoneNumber1 || ''}
                  className='form-input'
                  onChange={(e) => setPhoneNumbers(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='course_of_study'>Course of Study</label>
                <input
                  type='text'
                  name='course_of_study'
                  value={course_of_study || ''}
                  className='form-input'
                  onChange={(e) => setCourse_of_study(e.target.value)}
                />
              </div>
              <input
                type='submit'
                value='Submit'
                className='btn'
                onClick={modalClose}
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

StaffEdit.propTypes = {
  current: PropTypes.object,
  updateStaff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.staff.current,
});

export default connect(mapStateToProps, { updateStaff })(StaffEdit);
