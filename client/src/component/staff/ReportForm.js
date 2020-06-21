import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// JS
import { editModalClose } from '../js/main';
import { createReport } from '../../action/report';

const ReportForm = ({ current, createReport, subjects }) => {
  const [formData, setFormData] = useState({
    term: '',
    subject: '',
    score: '',
  });

  const { term, subject, score } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (subject !== '' || score !== '') {
      createReport({
        id: current._id,
        term,
        subject,
        score,
      });
    }
  };

  return (
    <div className='modal-container' id='editModal'>
      <div className='modal'>
        <button className='close-btn' id='close' onClick={editModalClose}>
          <i className='fa fa-times'></i>
        </button>
        <div className='modal-header'>
          <h3>Setup Result</h3>
        </div>
        <div className='modal-content'>
          <p>Please Specify Term</p>
          <form className='modal-form' onSubmit={onSubmit}>
            <div>
              <label htmlFor='subject'>Term</label>
              <select
                name='term'
                value={term}
                className='form-input'
                onChange={onChange}
              >
                <option>-- Select --</option>
                <option value='1st'>1st</option>
                <option value='2nd'>2nd</option>
                <option value='3rd'>3rd</option>
              </select>
            </div>
            <div>
              <label htmlFor='subject'>Subject</label>
              <select
                name='subject'
                value={subject}
                className='form-input'
                onChange={onChange}
              >
                <option>-- Select --</option>
                {subjects.map((s) => (
                  <option key={s._id} value={s.subject}>
                    {s.subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='score'>Score</label>
              <input
                type='text'
                name='score'
                value={score}
                placeholder='Score'
                className='form-input'
                onChange={onChange}
              />
            </div>
            <input
              type='submit'
              value='Submit'
              className='btn'
              onClick={editModalClose}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

ReportForm.propTypes = {
  createReport: PropTypes.func.isRequired,
  current: PropTypes.object,
  subjects: PropTypes.array,
};

const mapStateToProps = ({ report: { current }, class_: { subjects } }) => ({
  current,
  subjects,
});

const mapDispatchToProps = (dispatch) => ({
  createReport: (formData) => dispatch(createReport(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);
