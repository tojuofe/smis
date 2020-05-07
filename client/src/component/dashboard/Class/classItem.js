import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentStaff } from '../../../action/staff';

const ClassItem = ({ staff, getCurrentStaff }) => {
  const modalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentStaff(staff);
  };

  const {
    surName,
    middleName,
    lastName,
    gender,
    email,
    qualification,
    course_of_study,
    class_assigned,
    staff_type,
  } = staff;

  return (
    <Fragment>
      {staff_type !== 'Non-Teaching' && (
        <tr>
          <td data-label='Full Name'>{`${surName} ${middleName} ${lastName}`}</td>
          <td data-label='Gender'>{gender}</td>
          <td data-label='Email Address'>{email}</td>
          <td data-label='Qualification'>{qualification}</td>
          <td data-label='Course of Study'>{course_of_study}</td>
          <td data-label='Class Assigned To'>{`${
            class_assigned !== undefined ? class_assigned : 'Class Not Assigned'
          }`}</td>
          <td data-label='Operation'>
            <button type='submit' className='btn' id='open' onClick={modalOpen}>
              Assign Class
            </button>
          </td>
        </tr>
      )}
    </Fragment>
  );
};

ClassItem.propTypes = {
  getCurrentStaff: PropTypes.func.isRequired,
  staff: PropTypes.object.isRequired,
};

export default connect(null, { getCurrentStaff })(ClassItem);
