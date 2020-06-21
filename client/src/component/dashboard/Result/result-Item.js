import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentResult } from '../../../action/report';

const ResultItem = ({ report, getCurrentResult }) => {
  const subjectModalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('editModal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentResult(report);
  };

  const lgModalOpen = () => {
    const open = document.getElementById('open');
    const lgmodal = document.getElementById('modal-lg');

    if (open) {
      lgmodal.classList.add('show-modal');
    }
    getCurrentResult(report);
  };

  const deleteModalOpen = () => {
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');

    if (open) {
      modal.classList.add('show-modal');
    }
    getCurrentResult(report);
  };

  return (
    <Fragment>
      <tr>
        <td
          data-label='Full Name'
          onClick={subjectModalOpen}
        >{`${report.surName} ${report.middleName} ${report.lastName}`}</td>
        <td data-label='Class Admitted'>{report.class_admitted}</td>
        <td data-label='Exam Type'>{report.exam_type}</td>
        <td data-label='Operation' className='operation'>
          <button type='submit' className='btn' id='open' onClick={lgModalOpen}>
            View
          </button>
          <button
            type='submit'
            className='btn'
            id='open'
            onClick={deleteModalOpen}
          >
            Delete / Download
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

ResultItem.propTypes = {
  getCurrentResult: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentResult: (report) => dispatch(getCurrentResult(report)),
});

export default connect(null, mapDispatchToProps)(ResultItem);
