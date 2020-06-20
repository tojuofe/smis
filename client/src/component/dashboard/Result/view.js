import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

// JS
import { lgModalClose } from '../../js/main';

import './result.style.css';

const View = ({ current }) => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [class_admitted, setClass_admitted] = useState('');
  const [exam_type, setExamType] = useState('');
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');
  const [second_subject, setSecond_Subject] = useState('');
  const [second_score, setSecond_Score] = useState('');
  const [third_subject, setThird_Subject] = useState('');
  const [third_score, setThird_Score] = useState('');

  useEffect(() => {
    if (current) {
      setImg(current.img);
      setName(`${current.surName} ${current.middleName} ${current.lastName}`);
      setClass_admitted(current.class_admitted);
      setExamType(current.exam_type);
      setSubject(current.result.first_term.map((s) => `${s.subject + '\n'}`));
      setScore(current.result.first_term.map((s) => `${s.score + '\n'}`));
      setSecond_Subject(
        current.result.second_term.map((s) => `${s.subject + '\n'}`)
      );
      setSecond_Score(
        current.result.second_term.map((s) => `${s.score + '\n'}`)
      );
      setThird_Subject(
        current.result.third_term.map((s) => `${s.subject + '\n'}`)
      );
      setThird_Score(current.result.third_term.map((s) => `${s.score + '\n'}`));
    }
  }, [current]);

  return (
    <Fragment>
      <div className='modal-container' id='modal-lg'>
        <div className='lgmodal'>
          <button
            className='close-btn'
            id='close'
            onClick={() => {
              lgModalClose();
            }}
          >
            <i className='fa fa-times'></i>
          </button>
          <div className='lgmodal-header'>
            <div className='img-cover'>
              <img src={img} alt='' className='profile-img' />
            </div>
            <h3>STUDENT RESULT</h3>
          </div>
          <div className='lgmodal-content'>
            <h2>RESULT DETAILS</h2>
            <div className='profile'>
              <div className='details'>
                <label htmlFor=''>Names</label>
                <p name='name' value={name || ''}>
                  {name}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Class Admitted</label>
                <p name='class_admitted' value={class_admitted || ''}>
                  {class_admitted}
                </p>
              </div>
              <div className='details result-border'>
                <label htmlFor=''>Exam Type</label>
                <p name='exam_type' value={exam_type || ''}>
                  {exam_type}
                </p>
              </div>
              <div className='details'>
                <label htmlFor=''>Term</label>
                <p>1st</p>
              </div>

              <div className='details result-border'>
                <label
                  name='subject'
                  className='popUpResult'
                  value={subject || ''}
                >
                  {subject}
                </label>
                <p name='score' className='popUpResult' value={score || ''}>
                  {score}
                </p>
              </div>

              <div className='details'>
                <label htmlFor=''>Term</label>
                <p>2nd</p>
              </div>

              <div className='details result-border'>
                <label
                  name='second_subject'
                  className='popUpResult'
                  value={second_subject || ''}
                >
                  {second_subject}
                </label>
                <p
                  name='second_score'
                  className='popUpResult'
                  value={second_score || ''}
                >
                  {second_score}
                </p>
              </div>

              <div className='details'>
                <label htmlFor=''>Term</label>
                <p>3rd</p>
              </div>

              <div className='details'>
                <label
                  name='third_subject'
                  className='popUpResult'
                  value={third_subject || ''}
                >
                  {third_subject}
                </label>
                <p
                  name='third_score'
                  className='popUpResult'
                  value={third_score || ''}
                >
                  {third_score}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ report: { current } }) => ({
  current,
});

export default connect(mapStateToProps)(View);
