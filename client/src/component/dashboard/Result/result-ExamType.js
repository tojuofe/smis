import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// JS
import { modalClose } from '../../js/main.js';
import { createExamType } from '../../../action/class';

const ResultExamType = ({ createExamType }) => {
  const [exam_type, setExamType] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createExamType({ exam_type });
  };
  return (
    <div className='modal-container' id='modal'>
      <div className='modal'>
        <button className='close-btn' id='close' onClick={modalClose}>
          <i className='fa fa-times'></i>
        </button>
        <div className='modal-header'>
          <h3>Exam Type</h3>
        </div>
        <div className='modal-content'>
          <form className='modal-form' onSubmit={onSubmit}>
            <div>
              <label htmlFor='examtype'>Create Exam Type</label>
              <input
                type='text'
                name='exam_type'
                value={exam_type}
                className='form-input'
                placeholder='Exam Type'
                onChange={(e) => setExamType(e.target.value)}
              />
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
  );
};

ResultExamType.propTypes = {
  createExamType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createExamType: (exam_type) => dispatch(createExamType(exam_type)),
});

export default connect(null, mapDispatchToProps)(ResultExamType);
