import React from 'react';

import { Provider } from 'react-redux';

import Login from './pages/Login/Login';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
