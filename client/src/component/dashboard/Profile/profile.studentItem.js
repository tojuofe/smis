import React, { Fragment } from 'react';

const ProfileStudentItem = ({ student }) => {
  return (
    <Fragment>
      <tr>
        <td data-label='Full Name'>{`${student.surName} ${student.middleName} ${student.lastName}`}</td>
        <td data-label='Gender'>{student.gender}</td>
        <td data-label='Date of Birth'>{student.date_of_birth}</td>
        <td data-label='Class Admitted'>{student.class_admitted}</td>
        <td data-label='House Address'>{student.house_address}</td>
        <td data-label='Emergency Contact'>{student.emergency_contact}</td>
        <td data-label='Date of Registration'>
          {student.date_of_registration}
        </td>
      </tr>
    </Fragment>
  );
};

export default ProfileStudentItem;
