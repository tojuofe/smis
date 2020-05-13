import React, { Fragment } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from './layout/Navbar';
import Spinner from '../layout/Spinner';

const Profile = ({ auth: { user, isAuthenticated, loading } }) => {
  return (
    <Fragment>
      <Navbar />
      {isAuthenticated && !loading ? (
        <div className='profile'>
          <div className='profile-cover'>
            <div className='profile-header'>
              <div className='img-cover'>
                <img src={user && user.img} alt='' className='profile-img' />
              </div>
            </div>
            <div className='profile-content'>
              <h2>STAFF PROFILE</h2>
              <div className='details'>
                <div className='detail'>
                  <label htmlFor=''>Names</label>
                  <p>{`${user && user.surName} ${user && user.middleName} ${
                    user && user.lastName
                  }`}</p>
                </div>
                <div className='detail'>
                  <label htmlFor=''>Gender</label>
                  <p>{user && user.gender}</p>
                </div>
                <div className='detail'>
                  <label htmlFor=''>House Address</label>
                  <p>{user && user.house_address}</p>
                </div>
                <div className='detail'>
                  <label htmlFor=''>Phone Number</label>
                  <p>{user && user.phoneNumber1}</p>
                </div>
                <div className='detail'>
                  <label htmlFor=''>Qualification</label>
                  <p>{user && user.qualification}</p>
                </div>
                <div className='detail'>
                  <label htmlFor=''>Course of Study</label>
                  <p>{user && user.course_of_study}</p>
                </div>
                <div className='detail'>
                  <label htmlFor=''>Class Assigned To</label>
                  <p>{`${
                    user && user.class_assigned !== undefined
                      ? `${user && user.class_assigned}`
                      : 'No Class Assigned'
                  }`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Profile);
