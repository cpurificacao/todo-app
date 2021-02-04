import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import TodoReducer from './views/Todo/reducer';
import App from './App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk)(createStore)(TodoReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
