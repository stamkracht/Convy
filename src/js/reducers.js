import { combineReducers } from 'redux';

// reducer functions.
const userReducer = function(state, action) {
  if (state === undefined) {
    state = [];
  }

  if (action.type === 'ADD_USER') {
    var newState = state.concat([ action.user ]);
    return newState;
  }

  return state;
}

const widgetReducer = function(state = {}, action) {
  return state;
}

// combine the reducers
const reducers = combineReducers({
  userState: userReducer,
  widgetState: widgetReducer,
});

export default reducers;
