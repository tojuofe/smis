import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { lgModalClose } from '../../js/main';

const View = ({ current }) => {
  const [img, setImg] = useState('');
  const [surName, setSurName] = useState('');
  const [gender, setGender] = useState('');
  const [house_address, setHouse_Address] = useState('');
  const [emergency_contact, setEmergencyContact] = useState('');
  const [class_admitted, setClassAdmitted] = useState('');

  useEffect(() => {
    if (current) {
      setImg(current.img);
      setSurName(
        `${current.surName} ${current.middleName}  ${current.lastName}`
      );
      setGender(current.gender);
      setHouse_Address(current.house_address);
      setEmergencyContact(current.emergency_contact);
      setClassAdmitted(current.class_admitted);
    }
  }, [current]);

  return (
    <Fragment>
      <div className='modal-container' id='modal-lg'>
        <div className='lgmodal'>
          <button className='close-btn' id='close' onClick={lgModalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='lgmodal-header'>
            <div className='img-cover'>
              <img src={img} alt='' className='profile-img' />
            </div>
            <h3>STUDENT PROFILE</h3>
          </div>
          <div className='lgmodal-content'>
            <h2>PROFILE DETAILS</h2>
            <div className='profile'>
              <div className='details'>
                <label htmlFor=''>Names</label>
                <p name='surName' value={surName || ''}>
                  {surName}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Gender</label>
                <p name='gender' value={gender || ''}>
                  {gender}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>House Address</label>
                <p name='house_address' value={house_address || ''}>
                  {house_address}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Emergency Phone Number</label>
                <p name='emergency_contact' value={emergency_contact || ''}>
                  {emergency_contact}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Class Admitted</label>
                <p name='class_admitted' value={class_admitted || ''}>
                  {class_admitted}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

View.propTypes = {
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.student.current,
});

export default connect(mapStateToProps, {})(View);
