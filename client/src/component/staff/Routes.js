import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRouteStaff from '../routing/PrivateRouteStaff';
import { loadStaff } from '../../action/auth';

import StaffLogin from '../auth/Staff.login';
import Profile from './Profile';
import View from './View';

const Routes = ({ isAuthenticated, user, loadStaff }) => {
  useEffect(() => {
    loadStaff();
  }, [loadStaff]);

  return (
    <Fragment>
      <Switch>
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
      </Switch>
    </Fragment>
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  loadStaff: PropTypes.func,
};

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({
  isAuthenticated,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  loadStaff: () => dispatch(loadStaff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
