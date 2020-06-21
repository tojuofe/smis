import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createDescription } from '../../../action/payment';

// JS
import { editModalClose } from '../../js/main';

const PaymentDescription = ({ createDescription }) => {
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createDescription({ description });
  };

  return (
    <Fragment>
      <div className='modal-container' id='editModal'>
        <div className='modal'>
          <button className='close-btn' id='close' onClick={editModalClose}>
            <i className='fa fa-times'></i>
          </button>
          <div className='modal-header'>
            <h3>Create Description / Payment Type</h3>
          </div>
          <div className='modal-content'>
            <form className='modal-form' onSubmit={onSubmit}>
              <div>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  name='description'
                  value={description}
                  className='form-input'
                  placeholder='Description'
                  onChange={(e) => setDescription(e.target.value)}
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
    </Fragment>
  );
};

PaymentDescription.propTypes = {
  createDescription: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createDescription: (description) => dispatch(createDescription(description)),
});

export default connect(null, mapDispatchToProps)(PaymentDescription);
