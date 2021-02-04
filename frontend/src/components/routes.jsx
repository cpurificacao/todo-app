import React from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';

import Todo from '../views/Todo';
import About from '../views/About';

const Routes = () => (
  <HashRouter hashType='slash'>
    <Route path="/todos" component={Todo} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/todos" />
  </HashRouter>
);

export default Routes;
