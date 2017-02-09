import registerServiceWorker from './register-service-worker.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import router from './router';


// Provider is a top-level component that wrapps our entire application,
// including the router. We pass it a reference to the store,
// so we can use react-redux's connect() method for component containers.
ReactDOM.render(
  <Provider store={store}>
    { router }
  </Provider>,
  document.querySelector('.s-application')
);
