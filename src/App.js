import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop/ScrollToTop';

import Routes from './routes/Routes';
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
};

export default App;
