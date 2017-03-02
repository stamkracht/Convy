import registerServiceWorker from './register-service-worker.js';

import React from 'react';
import ReactDOM from 'react-dom';

// Use the react router
import { Router, browserHistory } from 'react-router';

// Imports for using redux
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

// Imports needed for for Convy
import { convyRoute, convyReducers, convyConfig } from './convy'

// convyConfig.stateName = 'convy';
// convyConfig.urlPrefix = 'convy';
// convyConfig.adapter = new SlackAdapter();

const loggerMiddleware = createLogger({
  predicate: (getState, action) => true
});

function configureStore() {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
      // Other middleware
    )
  );
  const reducers = combineReducers({
     // Will store the state in object convy
    [convyConfig.stateName]: convyReducers
    // Define other reducers for your store
    // products: productsReducer
  });

  return createStore(reducers, enhancer)
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={ browserHistory }>
      {convyRoute()}
    </Router>
  </Provider>,
  document.querySelector('.s-application')
);