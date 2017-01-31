function headerReducer(state, action) {
  if (state === undefined) {
    state = {
      chatActive: false,
    };
  }

  if (action.type === 'OPEN_CHAT') {
    var newState = Object.assign({}, state, {
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

export default headerReducer;
