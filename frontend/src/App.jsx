import React from 'react';

import 'modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Routes from './components/routes';
import Header from './components/header';

const App = () => (
  <>
    <Header />
    <Routes />
  </>
);

export default App;
