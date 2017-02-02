function headerReducer(state, action) {
  if (state === undefined) {
    state = {
      chatActive: false,
      myProfileActive: false,
    };
  }

  if (action.type === 'OPEN_CHAT') {
    let newState = Object.assign({}, state, {
      id: action.id,
      chatActive: true,
    });

    return newState;
  }

  if (action.type === 'CLOSE_CHAT') {
    let newState = Object.assign({}, state, {
      chatActive: false,
    });

    return newState;
  }

  if (action.type === 'OPEN_MY_PROFILE') {
    let newState = Object.assign({}, state, {
      myProfileActive: true,
    });

    return newState;
  }

  return state;
}

export default headerReducer;
