import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const ResultItem = ({ result }) => {
  return (
    <Fragment>
      <div className='profile-cover my-2'>
        <div className='profile-header'>
          <div className='img-cover'>
            <img src={result.img} alt='' className='profile-img' />
          </div>
        </div>
        <div className='profile-content'>
          <h2>STUDENT RESULT</h2>
          <div className='details'>
            <div className='detail'>
              <label htmlFor=''>Names</label>
              <p>{`${result.surName} ${result.middleName} ${result.lastName}`}</p>
            </div>
            <div className='detail'>
              <label htmlFor=''>Gender</label>
              <p>{result.gender}</p>
            </div>
            <div className='detail'>
              <label htmlFor=''>Class Admitted</label>
              <p>{result.class_admitted}</p>
            </div>
            <div className='detail'>
              <label htmlFor=''>{result.exam_type}</label>
            </div>
            <div className='detail'>
              <label htmlFor=''>Term</label>
              <p>1st</p>
            </div>
            <div className='detail result-border'>
              <label className='popUpResult'>
                {result.result.first_term.map((s) => `${s.subject + '\n'}`)}
              </label>
              <p className='popUpResult'>
                {result.result.first_term.map((s) => `${s.score + '\n'}`)}
              </p>
            </div>
            <div className='detail'>
              <label htmlFor=''>Term</label>
              <p>2nd</p>
            </div>
            <div className='detail result-border'>
              <label className='popUpResult'>
                {result.result.second_term.map((s) => `${s.subject + '\n'}`)}
              </label>
              <p className='popUpResult'>
                {result.result.second_term.map((s) => `${s.score + '\n'}`)}
              </p>
            </div>
            <div className='detail'>
              <label htmlFor=''>Term</label>
              <p>3rd</p>
            </div>
            <div className='detail'>
              <label className='popUpResult'>
                {result.result.third_term.map((s) => `${s.subject + '\n'}`)}
              </label>
              <p className='popUpResult'>
                {result.result.third_term.map((s) => `${s.score + '\n'}`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // getStudentResult: () => dispatch(getStudentResult()),
});

export default connect(null, mapDispatchToProps)(ResultItem);
