import { createStore, compose } from 'redux';

import reducers from './reducers';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = reduxDevtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers();

const store = createStore(reducers, enhancer);

export default store;
