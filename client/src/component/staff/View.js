import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSubject } from '../../action/class';
import { getReport } from '../../action/report';
import { loadStaff } from '../../action/auth';

import Navbar from './layout/Navbar';
import ViewItem from './ViewItem';
import Spinner from '../layout/Spinner';
import ReportForm from './ReportForm';
import Alert from '../layout/Alert';

const View = ({
  auth: { user },
  report: { reports, loading },
  getReport,
  getSubject,
  loadStaff,
}) => {
  const getAllStudents = reports.map((report) => (
    <ViewItem key={report._id} report={report} user={user} />
  ));

  useEffect(() => {
    getReport();
    getSubject();
    loadStaff();
  }, [getReport, getSubject, loadStaff]);

  return (
    <Fragment>
      <Navbar />
      <div className='profile'>
        <Alert />
        <div className='staff-details py-1'>
          <label htmlFor=''>Teacher's Name: </label>
          <p>{`${user && user.surName} ${user && user.middleName} ${
            user && user.lastName
          }`}</p>
        </div>
        {reports !== null && !loading ? (
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
      <ReportForm />
    </Fragment>
  );
};

View.propTypes = {
  auth: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  getReport: PropTypes.func.isRequired,
  getSubject: PropTypes.func.isRequired,
  loadStaff: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  report: state.report,
});

export default connect(mapStateToProps, { getReport, getSubject, loadStaff })(
  View
);
