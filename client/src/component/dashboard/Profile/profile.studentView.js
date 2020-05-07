import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { modalClose } from '../../js/main';

const ProfileStudentView = ({ current }) => {
  const [surName, setSurName] = useState('');
  const [gender, setGender] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [class_admitted, setClass_admitted] = useState('');
  const [house_address, setHouse_address] = useState('');
  const [emergency_contact, setEmergency_contact] = useState('');
  const [date_of_registration, setDate_of_registration] = useState('');

  useEffect(() => {
    if (current) {
      setSurName(`${current.surName} ${current.lastName}`);
      setGender(current.gender);
      setDate_of_birth(current.date_of_birth);
      setClass_admitted(current.class_admitted);
      setHouse_address(current.house_address);
      setEmergency_contact(current.emergency_contact);
      setDate_of_registration(current.date_of_registration);
    }
  }, [current]);

  return (
    <Fragment>
      <div className='modal-container' id='modal'>
        <div className='modal'>
          <button className='close-btn' id='close' onClick={modalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-header'>
            <h3>Student Details</h3>
          </div>
          <div className='modal-content'>
            <form className='modal-form'>
              <div>
                <label htmlFor='fullname'>Full Name</label>
                <input
                  type='text'
                  id='surname'
                  placeholder='Full Name'
                  disabled
                  name='surName'
                  value={surName}
                  className='form-input'
                  onChange={(e) => setSurName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='gender'>Gender</label>
                <select
                  disabled
                  className='form-input'
                  name='gender'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>{gender}</option>
                </select>
              </div>
              <div>
                <label htmlFor='date_of_birth'>Date of Birth</label>
                <input
                  type='date'
                  disabled
                  className='form-input'
                  name='date_of_birth'
                  value={date_of_birth}
                  onChange={(e) => setDate_of_birth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='class_Admitted'>Class</label>
                <input
                  type='text'
                  id='className'
                  placeholder='Lastname'
                  disabled
                  className='form-input'
                  name='class_admitted'
                  value={class_admitted || ''}
                  onChange={(e) => setClass_admitted(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='houseaddress'>House Address</label>
                <input
                  type='text'
                  id='houseaddress'
                  placeholder='Lastname'
                  disabled
                  className='form-input'
                  name='house_address'
                  value={house_address || ''}
                  onChange={(e) => setHouse_address(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='emergency_phoneNo'>Emergency Phone No</label>
                <input
                  type='text'
                  id='emergency_phoneNo'
                  placeholder='Emergency Phone No'
                  disabled
                  className='form-input'
                  name='emergency_contact'
                  value={emergency_contact || ''}
                  onChange={(e) => setEmergency_contact(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='date_of_registration'>
                  Date of Registration
                </label>
                <input
                  type='date'
                  disabled
                  className='form-input'
                  name='date_of_registration'
                  value={date_of_registration || ''}
                  onChange={(e) => setDate_of_registration(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
ProfileStudentView.propTypes = {
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.student.current,
});

export default connect(mapStateToProps, {})(ProfileStudentView);
