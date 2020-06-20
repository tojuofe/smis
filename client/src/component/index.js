import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Style from './style/style.min.css';

// Component
import Login from './auth/login';
import Dashboard from './dashboard/dashboard';
import Staff from './dashboard/Staff/staff';
import Student from './dashboard/Student/student';
import Profiles from './dashboard/Profile/profiles';
import Class from './dashboard/Class/class';
import Payment from './dashboard/Payment/payment';
import Result from './dashboard/Result/result';
import NotFound from './dashboard/notfound.js';

// Staff Component
import StaffLogin from './auth/Staff.login';
import Profile from './staff/Profile';
import View from './staff/View';
import Reports from './staff/Report';

import PrivateRoute from './routing/PrivateRoute';
import PrivateRouteStaff from './routing/PrivateRouteStaff';

const Index = () => {
  return (
    <Router>
      <div className={Style}>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/staff' component={Staff} />
          <PrivateRoute exact path='/student' component={Student} />
          <PrivateRoute exact path='/profiles' component={Profiles} />
          <PrivateRoute exact path='/class' component={Class} />
          <PrivateRoute exact path='/payment' component={Payment} />
          <PrivateRoute exact path='/result' component={Result} />
          <Route exact path='/login' component={Login} />
          <PrivateRouteStaff exact path='/profile' component={Profile} />
          <PrivateRouteStaff exact path='/views' component={View} />
          <PrivateRouteStaff exact path='/reports' component={Reports} />
          <Route exact path='/staff/login' component={StaffLogin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Index;
