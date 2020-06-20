import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { deleteResult, downloadResult } from '../../../action/report';

// JS
import { modalClose } from '../../js/main.js';
// CSS
import './result.style.css';

const ResultEdit = ({ current, deleteResult, downloadResult }) => {
  const [check, setCheck] = useState('Delete');
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (check === 'Delete') {
      deleteResult({
        id: current._id,
        term,
      });
    } else {
      if (term === '1st') {
        downloadResult({
          surname: current.surName,
          middlename: current.middleName,
          lastname: current.lastName,
          class_admitted: current.class_admitted,
          term: '1st',
          result: current.result.first_term,
        });
      } else if (term === '2nd') {
        downloadResult({
          surname: current.surName,
          middlename: current.middleName,
          lastname: current.lastName,
          class_admitted: current.class_admitted,
          term: '2nd',
          result: current.result.second_term,
        });
      } else if (term === '3rd') {
        downloadResult({
          surname: current.surName,
          middlename: current.middleName,
          lastname: current.lastName,
          class_admitted: current.class_admitted,
          term: '3rd',
          result: current.result.third_term,
        });
      }
    }
  };

  return (
    <Fragment>
      <div className='modal-container' id='modal'>
        <div className='modal'>
          <button className='close-btn' id='close' onClick={modalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-header'>
            <h3>Operation Session</h3>
          </div>
          <div className='modal-content'>
            <form className='modal-form' onSubmit={onSubmit}>
              <div>
                <label htmlFor='subject'>Choose Operation</label>
                <select
                  name='check'
                  value={check}
                  className='form-input'
                  onChange={(e) => setCheck(e.target.value)}
                >
                  <option value='Delete'>Delete</option>
                  <option value='Download'>Download</option>
                </select>
              </div>
              <p>Please Specify Term</p>
              <div>
                <label htmlFor='subject'>Term</label>
                <select
                  name='term'
                  value={term}
                  className='form-input'
                  onChange={(e) => setTerm(e.target.value)}
                >
                  <option>-- Select --</option>
                  <option value='1st'>1st</option>
                  <option value='2nd'>2nd</option>
                  <option value='3rd'>3rd</option>
                </select>
              </div>
              <input
                type='submit'
                value='Ok'
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

const mapStateToProps = ({ report: { current } }) => ({
  current,
});

const mapDispatchToProps = (dispatch) => ({
  deleteResult: (term) => dispatch(deleteResult(term)),
  downloadResult: (formData) => dispatch(downloadResult(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultEdit);
