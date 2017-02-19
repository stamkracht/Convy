import { combineReducers } from 'redux';

import headerReducer from './reducers.header';
import swipeViewReducer from './reducers.swipe-view';

// combine the reducers
const reducers = combineReducers({
  headerState: headerReducer,
  swipeViewState: swipeViewReducer
});

export default reducers;
