import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { promoteStudent } from '../../../action/student';
import { getClasses } from '../../../action/class';

// JS
import { modalClose } from '../../js/main.js';

const Promote = ({ current, classes, promoteStudent, getClasses }) => {
  const [surName, setSurname] = useState('');
  const [middleName, setMiddlename] = useState('');
  const [lastName, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [class_admitted, setClass_admitted] = useState('');

  useEffect(() => {
    if (current) {
      setSurname(current.surName);
      setMiddlename(current.middleName);
      setLastname(current.lastName);
      setGender(current.gender);
      setDate_of_birth(current.date_of_birth);
    }
    getClasses();
  }, [current, getClasses]);

  const onSubmit = (e) => {
    e.preventDefault();
    promoteStudent({
      id: current._id,
      surName,
      middleName,
      lastName,
      gender,
      date_of_birth,
      class_admitted,
    });
  };

  return (
    <Fragment>
      <div className='modal-container' id='modal'>
        <div className='modal'>
          <button className='close-btn' id='close' onClick={modalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-header'>
            <h3>Promotion</h3>
          </div>
          <div className='modal-content'>
            <p>Choose the class to be Promoted To!</p>
            <form className='modal-form' onSubmit={onSubmit}>
              <div>
                <label htmlFor='surname'>Surname</label>
                <input
                  type='text'
                  disabled
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
                  disabled
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
                  disabled
                  className='form-input'
                  name='lastName'
                  value={lastName || ''}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='gender'>Gender</label>
                <select
                  disabled
                  className='form-input'
                  name='gender'
                  value={gender || ''}
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
                  value={date_of_birth || ''}
                  onChange={(e) => setDate_of_birth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='class_admitted'>Class Promoted To</label>
                <select
                  className='form-input'
                  name='class_admitted'
                  value={class_admitted || ''}
                  onChange={(e) => setClass_admitted(e.target.value)}
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
                value='Promote'
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

Promote.propTypes = {
  current: PropTypes.object,
  classes: PropTypes.array,
  promoteStudent: PropTypes.func.isRequired,
  getClasses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.student.current,
  classes: state.class_.classes,
});

export default connect(mapStateToProps, { promoteStudent, getClasses })(
  Promote
);
