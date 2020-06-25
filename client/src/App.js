import React from 'react';
import setAuthToken from './utils/setAuthToken';

// Components
import Index from './component/';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => <Index />;

export default App;
