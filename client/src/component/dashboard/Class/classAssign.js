import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getClasses } from '../../../action/class';
import { assignStaffToClass } from '../../../action/staff';

// JS
import { modalClose, alertScroll } from '../../js/main.js';

const ClassAssign = ({
  current,
  getClasses,
  assignStaffToClass,
  class_: { classes },
}) => {
  const [surName, setSurName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [class_assigned, setClassAssigned] = useState('');

  useEffect(() => {
    if (current) {
      setSurName(current.surName);
      setLastName(current.lastName);
      setGender(current.gender);
    }

    getClasses();
  }, [getClasses, current]);

  const onSubmit = (e) => {
    e.preventDefault();
    assignStaffToClass({
      id: current._id,
      surName,
      lastName,
      gender,
      class_assigned,
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
            <h3>Assign Class</h3>
          </div>
          <div className='modal-content'>
            <p>Choose the class you want to Assign!</p>
            <form className='modal-form' onSubmit={onSubmit}>
              <div>
                <label htmlFor='surname'>Surname</label>
                <input
                  type='text'
                  name='surName'
                  value={surName}
                  disabled
                  className='form-input'
                  onChange={(e) => setSurName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='lastname'>Lastname</label>
                <input
                  type='text'
                  name='lastName'
                  value={lastName}
                  disabled
                  className='form-input'
                  onChange={(e) => setLastName(e.target.value)}
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
                <label htmlFor='class_admitted'>Class Promoted To</label>
                <select
                  className='form-input'
                  name='class_assigned'
                  value={class_assigned || ''}
                  onChange={(e) => setClassAssigned(e.target.value)}
                >
                  <option value='0'>* Select</option>
                  {classes.map((c) => (
                    <option key={c._id} value={`${c.class_admitted}`}>
                      {c.class_admitted}
                    </option>
                  ))}
                </select>
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

ClassAssign.propTypes = {
  current: PropTypes.object,
  class_: PropTypes.object.isRequired,
  getClasses: PropTypes.func.isRequired,
  assignStaffToClass: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.staff.current,
  class_: state.class_,
});

export default connect(mapStateToProps, { getClasses, assignStaffToClass })(
  ClassAssign
);
