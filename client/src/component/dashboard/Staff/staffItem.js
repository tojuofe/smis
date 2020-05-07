import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getCurrentStaff } from '../../../action/staff';

const staffItem = ({ staff, getCurrentStaff }) => {
  const modalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentStaff(staff);
  };

  const lgModalOpen = () => {
    const open = document.getElementById('open');
    const lgmodal = document.getElementById('modal-lg');

    if (open) {
      lgmodal.classList.add('show-modal');
    }
    getCurrentStaff(staff);
  };

  return (
    <Fragment>
      <tr>
        <td data-label='Names'>{`${staff.surName} ${staff.middleName} ${staff.lastName}`}</td>
        <td data-label='Gender'>{staff.gender}</td>
        <td data-label='House Address'>{staff.house_address}</td>
        <td data-label='Phone Numbers'>
          {staff.phoneNumber2 !== undefined
            ? `${staff.phoneNumber1}, ${staff.phoneNumber2}`
            : staff.phoneNumber1}
        </td>
        <td data-label='Email'>{staff.email}</td>
        <td data-label='Date of Registration'>{staff.date_of_registration}</td>
        <td data-label='Date of Employment'>{staff.date_of_employment}</td>
        <td data-label='Qualification'>{staff.qualification}</td>
        <td data-label='Course of Study'>{staff.course_of_study}</td>
        <td data-label='Operations' className='operation'>
          <button type='submit' className='btn' id='open' onClick={lgModalOpen}>
            View
          </button>
          <button type='submit' className='btn' id='open' onClick={modalOpen}>
            Edit
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default connect(null, { getCurrentStaff })(staffItem);
