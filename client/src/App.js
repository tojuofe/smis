import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './action/auth';

// Components
import Index from './component/';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  });
  return (
    <Fragment>
      <Index />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
});

export default connect(null, mapDispatchToProps)(App);
