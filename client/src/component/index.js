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
import Report from './dashboard/Report/report';
import NotFound from './dashboard/notfound.js';
// import Navbar from './dashboard/Navbar';

import PrivateRoute from './routing/PrivateRoute';

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
          <PrivateRoute exact path='/report' component={Report} />
          <Route exact path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Index;
