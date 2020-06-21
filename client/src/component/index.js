import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Style from './style/style.min.css';

// Routes
import AdminRoutes from './dashboard/Routes';
import StaffRoutes from './staff/Routes';
import NotFound from './dashboard/notfound';

const Index = () => {
  return (
    <Router>
      <div className={Style}>
        <Switch>
          <Route component={AdminRoutes} />
          <Route component={StaffRoutes} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Index;
