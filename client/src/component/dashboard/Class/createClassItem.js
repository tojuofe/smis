import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentStudent } from '../../../action/student';

const CreateClassItem = ({ student, getCurrentStudent }) => {
  const modalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentStudent(student);
  };

  const lgModalOpen = () => {
    const open = document.getElementById('open');
    const lgmodal = document.getElementById('modal-lg');

    if (open) {
      lgmodal.classList.add('show-modal');
    }
    getCurrentStudent(student);
  };

  const EditModalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('editModal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentStudent(student);
  };

  return (
    <Fragment>
      <tr>
        <td data-label='Firstname'>{student.surName}</td>
        <td data-label='Middlename'>{student.middleName}</td>
        <td data-label='Lastname'>{student.lastName}</td>
        <td data-label='Gender'>{student.gender}</td>
        <td data-label='Date of Birth'>{student.date_of_birth}</td>
        <td data-label='Class'>{student.class_admitted}</td>
        <td data-label='Operations' className='operation'>
          <button type='submit' className='btn' id='open' onClick={lgModalOpen}>
            View
          </button>
          <button
            type='submit'
            className='btn'
            id='open'
            onClick={EditModalOpen}
          >
            Edit
          </button>
          <button type='submit' className='btn' id='open' onClick={modalOpen}>
            Promote
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

CreateClassItem.propTypes = {
  getCurrentStudent: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
};

export default connect(null, { getCurrentStudent })(CreateClassItem);
