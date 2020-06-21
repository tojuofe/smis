import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { loadUser } from '../../action/auth';

import Login from '../auth/login';
import Dashboard from '../dashboard/dashboard';
import Staff from '../dashboard/Staff/staff';
import Student from '../dashboard/Student/student';
import Profiles from '../dashboard/Profile/profiles';
import Class from '../dashboard/Class/class';
import Payment from '../dashboard/Payment/payment';
import Result from '../dashboard/Result/result';

import PrivateRoute from '../routing/PrivateRoute';

const Routes = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <Fragment>
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/staff' component={Staff} />
        <PrivateRoute exact path='/student' component={Student} />
        <PrivateRoute exact path='/profiles' component={Profiles} />
        <PrivateRoute exact path='/class' component={Class} />
        <PrivateRoute exact path='/payment' component={Payment} />
        <PrivateRoute exact path='/result' component={Result} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
});

export default connect(null, mapDispatchToProps)(Routes);
