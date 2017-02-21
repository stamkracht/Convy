function headerReducer(state, action) {
  if (state === undefined) {
    state = {
      chatActive: false,
      myProfileActive: false,
      navMoreActive: false,
    };
  }

  if (action.type === 'OPEN_CHAT') {
    let newState = Object.assign({}, state, {
      id: action.id,
      chatActive: true,
      navMoreActive: false,
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
      navMoreActive: false,
    });

    return newState;
  }

  if (action.type === 'CLOSE_MY_PROFILE') {
    let newState = Object.assign({}, state, {
      myProfileActive: false,
    });

    return newState;
  }

  if (action.type === 'TOGGLE_NAV_MORE') {
    let newState = Object.assign({}, state, {
      navMoreActive: !state.navMoreActive,
    });

    return newState;
  }

  return state;
}

export default headerReducer;
