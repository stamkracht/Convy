import { combineReducers } from 'redux';

// reducer functions.
const headerState = function(state, action) {
  if (state === undefined) {
    state = {
      chatActive: false,
    };
  }

  if (action.type === 'OPEN_CHAT') {
    var newState = Object.assign({}, state, {
      title: action.title,
      id: action.id,
      chatActive: true,
    });

    return newState;
  }

  if (action.type === 'CLOSE_CHAT') {
    var newState = Object.assign({}, state, {
      chatActive: false,
    });

    return newState;
  }

  return state;
}

// example reducer.
const widgetReducer = function(state = {}, action) {
  return state;
}

// combine the reducers
const reducers = combineReducers({
  headerState: headerState,
  widgetState: widgetReducer,
});

export default reducers;
