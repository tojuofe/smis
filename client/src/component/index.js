import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Style from './style/style.min.css';

// Routes
import Routes from './Routes';

const Index = () => (
  <Router>
    <div className={Style}>
      <Switch>
        <Route component={Routes} />
      </Switch>
    </div>
  </Router>
);

export default Index;
