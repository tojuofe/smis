import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ViewItem = ({ student, user }) => {
  return (
    <Fragment>
      {user && user.class_assigned === student.class_admitted && (
        <tr>
          <td data-label='Firstname'>{student.surName}</td>
          <td data-label='Middlename'>{student.middleName}</td>
          <td data-label='Lastname'>{student.lastName}</td>
          <td data-label='Gender'>{student.gender}</td>
          <td data-label='Date of Birth'>{student.date_of_birth}</td>
          <td data-label='Class'>{student.class_admitted}</td>
        </tr>
      )}
    </Fragment>
  );
};

ViewItem.protoTypes = {
  student: PropTypes.array,
  user: PropTypes.object,
};

export default ViewItem;
