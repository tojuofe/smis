import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editStudent } from '../../../action/student';

// JS
import { editModalClose, alertScroll } from '../../js/main.js';

const StudentEdit = ({ current, editStudent }) => {
  const [surName, setSurname] = useState('');
  const [middleName, setMiddlename] = useState('');
  const [lastName, setLastname] = useState('');
  const [house_address, setHouseAddress] = useState('');
  const [emergency_contact, setEmergencyContact] = useState('');

  useEffect(() => {
    if (current) {
      setSurname(current.surName);
      setMiddlename(current.middleName);
      setLastname(current.lastName);
      setHouseAddress(current.house_address);
      setEmergencyContact(current.emergency_contact);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();
    editStudent({
      id: current._id,
      surName,
      middleName,
      lastName,
      house_address,
      emergency_contact,
    });
    alertScroll();
  };

  return (
    <Fragment>
      <div className='modal-container' id='editModal'>
        <div className='modal'>
          <button className='close-btn' id='close' onClick={editModalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-header'>
            <h3>Edit Staff Details</h3>
          </div>
          <div className='modal-content'>
            <form className='modal-form' onSubmit={onSubmit}>
              <div>
                <label htmlFor='surname'>Surname</label>
                <input
                  type='text'
                  className='form-input'
                  name='surName'
                  value={surName || ''}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='middlename'>Middlename</label>
                <input
                  type='text'
                  className='form-input'
                  name='middleName'
                  value={middleName || ''}
                  onChange={(e) => setMiddlename(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='lastname'>Lastname</label>
                <input
                  type='text'
                  className='form-input'
                  name='lastName'
                  value={lastName || ''}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='house_address'>House Address</label>
                <input
                  type='text'
                  name='house_address'
                  value={house_address || ''}
                  className='form-input'
                  onChange={(e) => setHouseAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='emergency_phone_no'>Emergency Phone No</label>
                <input
                  type='number'
                  className='form-input'
                  name='emergency_contact'
                  value={emergency_contact || ''}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                />
              </div>
              <input
                type='submit'
                value='Submit'
                className='btn'
                onClick={editModalClose}
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

StudentEdit.propTypes = {
  current: PropTypes.object,
  editStudent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.student.current,
});

export default connect(mapStateToProps, { editStudent })(StudentEdit);
