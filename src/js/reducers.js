import { combineReducers } from 'redux';

import headerReducer from './reducers.header';

// combine the reducers
const reducers = combineReducers({
  headerState: headerReducer,
});

export default reducers;
