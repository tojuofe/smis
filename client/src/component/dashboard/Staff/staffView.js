import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { lgModalClose } from '../../js/main';

const StaffView = ({ current }) => {
  const [img, setImg] = useState('');
  const [surName, setSurName] = useState('');
  const [gender, setGender] = useState('');
  const [house_address, setHouse_Address] = useState('');
  const [phonenumber1, setPhoneNumbers] = useState('');
  const [qualification, setQualification] = useState('');
  const [course_of_study, setCourseofStudy] = useState('');
  const [staff_type, setStaffType] = useState('');
  const [class_assigned, setClassAssigned] = useState('');

  useEffect(() => {
    if (current) {
      setImg(current.img);
      setSurName(
        `${current.surName} ${current.middleName}  ${current.lastName}`
      );
      setGender(current.gender);
      setHouse_Address(current.house_address);
      setPhoneNumbers(
        `${
          current.phoneNumber2 !== undefined
            ? `${current.phoneNumber1}, ${current.phoneNumber2}`
            : current.phoneNumber1
        }`
      );
      setQualification(current.qualification);
      setCourseofStudy(current.course_of_study);
      setStaffType(current.staff_type);
      setClassAssigned(current.class_assigned);
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
              <img src={'/uploads' + img} alt='' className='profile-img' />
            </div>
            <h3>STAFF PROFILE</h3>
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
                <label htmlFor=''>Phone Number</label>
                <p name='phonenumber1' value={phonenumber1 || ''}>
                  {phonenumber1}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Qualification</label>
                <p name='qualification' value={qualification || ''}>
                  {qualification}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Course of Study</label>
                <p name='course_of_study' value={course_of_study || ''}>
                  {course_of_study}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Staff Type</label>
                <p name='staff_type' value={staff_type || ''}>
                  {staff_type}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Class Assigned To</label>

                <p name='class_assigned' value={class_assigned || ''}>
                  {`${
                    class_assigned !== undefined
                      ? `${class_assigned}`
                      : 'No Class Assigned'
                  }`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

StaffView.propTypes = {
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.staff.current,
});

export default connect(mapStateToProps, {})(StaffView);
