import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, loadUser } from '../../action/auth';
import { getClasses } from '../../action/class';
import { getStudents } from '../../action/student';
import { getStaff } from '../../action/staff';
import { getPayment } from '../../action/payment';
import { getParent } from '../../action/parent';
import PropTypes from 'prop-types';

import img from './img/IMG.png';
import NavSm from './navs/nav-sm';
import Navlg from './navs/nav-lg';
import { toggleNav } from '../js/main';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  auth: { isAuthenticated, loading },
  class_: { classes },
  student: { students },
  staff: { staffs },
  payment: { payments },
  loadUser,
  getClasses,
  getStudents,
  getStaff,
  getPayment,
  getParent,
  logout,
}) => {
  useEffect(() => {
    loadUser();
    getClasses();
    getStudents();
    getStaff();
    getPayment();
    getParent();
  }, [loadUser, getClasses, getStudents, getStaff, getPayment, getParent]);

  const classNum = classes.map(($class) => (
    <Fragment key={$class._id}>{$class}</Fragment>
  ));

  const student = students.map((student) => (
    <Fragment key={student._id}>{student}</Fragment>
  ));

  const staff = staffs.map((staff) => (
    <Fragment key={staff._id}>{staff}</Fragment>
  ));

  const payment = payments.map((payment) => (
    <Fragment key={payment._id}>{payment}</Fragment>
  ));

  return (
    <Fragment>
      <NavSm />
      <div id='dashboard-container'>
        <div className='dashboard'>
          <Navlg />
          {isAuthenticated && !loading ? (
            <div className='dashboard-right bg-secondary'>
              <button
                id='toggle'
                className='toggle sm-hide'
                onClick={toggleNav}
              >
                <i className='fas fa-bars fa-2x'></i>
              </button>
              <div className='control'>
                {' '}
                <div className='control-tab bg-dark'>
                  <h3>Class</h3>
                  <p>
                    <i className='fas fa-school'></i> {classNum.length}
                  </p>
                </div>
                <div className='control-tab bg-primary'>
                  <h3>Student</h3>
                  <p>
                    <i className='fas fa-users'></i> {student.length}
                  </p>
                </div>
                <div className='control-tab bg-danger'>
                  <h3>Staff</h3>
                  <p>
                    <i className='fas fa-chalkboard-teacher'></i> {staff.length}
                  </p>
                </div>
                <div className='control-tab bg-primary'>
                  <h3>Payment</h3>
                  <p>
                    <i className='fas fa-receipt'></i> {payment.length}
                  </p>
                </div>
              </div>

              <div className='info'>
                <div className='info-tab bg-light'>
                  <div className='info-top'>
                    <img src={img} className='img-round x2' alt='img' />
                    <div>
                      <h3>Manager</h3>
                      <p>Username: Admin</p>
                      <p>Mail: admin@mail.com</p>
                      <p>Role: Admin</p>
                    </div>
                  </div>
                  <div className='bottom-line mb-2'></div>
                  <div className='info-bottom'>
                    <h4 className='bg-primary'>
                      <i className='fas fa-cogs'></i> Account Setting
                    </h4>
                    <h4 className='bg-primary'>
                      <i className='fas fa-sms'></i> Messages
                    </h4>
                    <Link to='#!' onClick={logout}>
                      <h4 className='bg-primary'>
                        <i className='fas fa-sign-out-alt'></i> Logout
                      </h4>
                    </Link>
                  </div>
                </div>

                <div className='info-tab bg-light'>
                  <h3>Students' Leaderboard</h3>
                  <div className='info-top mt-1'>
                    <img src={img} className='img-round' alt='img' />
                    <div>
                      <h3>Student Two</h3>
                      <p>Congratulation Rank One</p>
                    </div>
                  </div>
                  <div className='bottom-line'></div>
                  <div className='info-top mt-1'>
                    <img src={img} className='img-round' alt='img' />
                    <div>
                      <h3>Student Three</h3>
                      <p>State Champion - 100 medal</p>
                    </div>
                  </div>
                </div>

                <div className='info-tab bg-light'>
                  <h3>Teachers' Leaderboard</h3>
                  <div className='info-top mt-1'>
                    <img src={img} className='img-round' alt='img' />
                    <div>
                      <h3>Teacher</h3>
                      <p>Best Teacher Award</p>
                    </div>
                  </div>
                  <div className='bottom-line'></div>
                  <div className='info-top mt-1'>
                    <img src={img} className='img-round' alt='img' />
                    <div>
                      <h3>English Teacher</h3>
                      <p>Ph.D in English</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='notice'>
                <div className='notice-news bg-light'>
                  <h3 className='mb-1'>News & Events</h3>
                  <div className='bottom-line mb-1'></div>
                  <div className='notice-day mb-1'>
                    <p>School annual day</p>
                    <p className='badge badge-success'>News Board</p>
                  </div>
                  <div className='bottom-line mb-1'></div>
                  <div className='notice-day mb-1'>
                    <p>School local hoilday</p>
                    <p className='badge badge-success'>News Board</p>
                  </div>
                </div>

                <div className='info-tab bg-light'>
                  <h3 className='mb-1'>Students' Leaderboard</h3>
                  <div className='info-top'>
                    <img src={img} className='img-round' alt='img' />
                    <div>
                      <h3>Parent One</h3>
                      <p>Hi..</p>
                      <p>12/2/2020</p>
                    </div>
                  </div>
                  <div className='bottom-line'></div>
                  <div className='info-top mt-1'>
                    <img src={img} className='img-round' alt='img' />
                    <div>
                      <h3>Parent Two</h3>
                      <p>Hello, Am Back</p>
                      <p>28/1/2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propsTypes = {
  auth: PropTypes.object.isRequired,
  class_: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  staff: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  getClasses: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  getStaff: PropTypes.func.isRequired,
  getPayment: PropTypes.func.isRequired,
  getParent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  class_: state.class_,
  student: state.student,
  staff: state.staff,
  payment: state.payment,
});

export default connect(mapStateToProps, {
  logout,
  getClasses,
  getStudents,
  getStaff,
  getPayment,
  getParent,
  loadUser,
})(Dashboard);
