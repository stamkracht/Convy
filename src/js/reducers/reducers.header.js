function headerReducer(state, action) {
  if (state === undefined) {
    state = {
      chatActive: false,
      myProfileActive: false,
      navMoreActive: false,
    };
  }
  if (action.type === 'SET_MODE') {
    let newState = Object.assign({}, state, {
      mode: action.mode,
      navMoreActive: false,
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
