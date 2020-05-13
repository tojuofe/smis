import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudents } from '../../action/student';

import Navbar from './layout/Navbar';
import ViewItem from './ViewItem';
import Spinner from '../layout/Spinner';

const View = ({
  auth: { user },
  student: { students, loading },
  getStudents,
}) => {
  const getAllStudents = students.map((student) => (
    <ViewItem key={student._id} student={student} user={user} />
  ));

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  return (
    <Fragment>
      <Navbar />
      <div className='profile'>
        <div className='staff-details py-1'>
          <label htmlFor=''>Teacher's Name: </label>
          <p>{`${user && user.surName} ${user && user.middleName} ${
            user && user.lastName
          }`}</p>
        </div>
        {students !== null && !loading ? (
          <table className='table'>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Middlename</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Date Of Birth</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>{getAllStudents}</tbody>
          </table>
        ) : (
          <Spinner />
        )}
      </div>
    </Fragment>
  );
};

View.propTypes = {
  auth: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  student: state.student,
});

export default connect(mapStateToProps, { getStudents })(View);
