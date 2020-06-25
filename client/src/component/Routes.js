import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrivateRoute from './routing/PrivateRoute';
import PrivateRouteParent from './routing/PrivateRouteParent';
import PrivateRouteStaff from './routing/PrivateRouteStaff';

// Admin Component
import Login from './auth/login';
import Dashboard from './dashboard/dashboard';
import Staff from './dashboard/Staff/staff';
import Student from './dashboard/Student/student';
import Profiles from './dashboard/Profile/profiles';
import Class from './dashboard/Class/class';
import Payment from './dashboard/Payment/payment';
import Result from './dashboard/Result/result';

import StaffLogin from './auth/Staff.login';
import Profile from './staff/Profile';
import View from './staff/View';

import ParentProfile from './parent/Profile';
import ParentLogin from './auth/parent.Login';
import ParentPayment from './parent/Payment';

import NotFound from './dashboard/notfound';

const Routes = ({ isAuthenticated, user }) => {
  return (
    <Fragment>
      <Switch>
        {/* Admin Routes */}
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/staff' component={Staff} />
        <PrivateRoute exact path='/student' component={Student} />
        <PrivateRoute exact path='/profiles' component={Profiles} />
        <PrivateRoute exact path='/class' component={Class} />
        <PrivateRoute exact path='/payment' component={Payment} />
        <PrivateRoute exact path='/result' component={Result} />
        <Route exact path='/login' component={Login} />
        {/* Staff Routes */}
        <PrivateRouteStaff
          exact
          path='/staff/profile/:id'
          component={Profile}
        />
        <PrivateRouteStaff exact path='/views' component={View} />
        <Route
          exact
          path='/staff/login'
          render={() =>
            isAuthenticated && user ? (
              <Redirect to={`/staff/profile/${user._id}`} />
            ) : (
              <StaffLogin />
            )
          }
        />

        {/* Parent Routes */}
        <PrivateRouteParent
          exact
          path='/parent/payments/:id'
          component={ParentPayment}
        />
        <PrivateRouteParent
          exact
          path='/parent/profile/:id'
          component={ParentProfile}
        />
        <Route
          exact
          path='/parent/login'
          render={() =>
            isAuthenticated && user ? (
              <Redirect to={`/parent/profile/${user._id}`} />
            ) : (
              <ParentLogin />
            )
          }
        />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({
  isAuthenticated,
  user,
});

export default connect(mapStateToProps)(Routes);
