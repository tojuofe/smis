import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentResult } from '../../action/report';

const ViewItem = ({ user, report, getCurrentResult }) => {
  const modalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('editModal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentResult(report);
  };

  return (
    <Fragment>
      {user && user.class_assigned === report.class_admitted && (
        <tr id='open' onClick={modalOpen}>
          <td data-label='Firstname'>{report.surName}</td>
          <td data-label='Middlename'>{report.middleName}</td>
          <td data-label='Lastname'>{report.lastName}</td>
          <td data-label='Gender'>{report.gender}</td>
          <td data-label='Date of Birth'>{report.date_of_birth}</td>
          <td data-label='Class'>{report.class_admitted}</td>
        </tr>
      )}
    </Fragment>
  );
};

ViewItem.protoTypes = {
  report: PropTypes.array,
  user: PropTypes.object,
  getCurrentResult: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentResult: (result) => dispatch(getCurrentResult(result)),
});

export default connect(null, mapDispatchToProps)(ViewItem);
