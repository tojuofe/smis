import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createSubject } from '../../../action/class';

// CSS
import './result.style.css';

const ResultForm = ({ createSubject }) => {
  const [subject, setSubject] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createSubject({ subject });

    setSubject('');
  };

  return (
    <div className='staff'>
      <div className='staff-form' id='retstu'>
        <div className='display-card'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                name='subject'
                placeholder='Create Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <input type='submit' value='Submit' className='btn mt-1' />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createSubject: (subject) => dispatch(createSubject(subject)),
});

export default connect(null, mapDispatchToProps)(ResultForm);
