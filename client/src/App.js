import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './action/auth';

// Components
import Index from './component/';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Index />
      </Fragment>
    </Provider>
  );
};

export default App;
