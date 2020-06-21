import React, { Fragment } from 'react';
import setAuthToken from './utils/setAuthToken';

// Components
import Index from './component/';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Fragment>
      <Index />
    </Fragment>
  );
};

export default App;
