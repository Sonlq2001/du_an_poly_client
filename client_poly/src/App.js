import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ScrollToTop from './helpers/ScrollToTop/ScrollToTop';
import store from './redux/store';
import { persistor } from './redux/store';

import Routes from './routes/Routes';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
