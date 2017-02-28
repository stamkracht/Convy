import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers/index.reducers';

const loggerMiddleware = createLogger({
    predicate: (getState, action) => true
});

function configureStore() {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducers, enhancer)
}

const store = configureStore();

export default store;
