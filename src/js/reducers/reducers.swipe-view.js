function swipeViewReducer(state, action) {
  if (state === undefined) {
    state = {};
  }

  if (action.type === 'SET_SWIPE_VIEW_INDEX') {
    let newState = Object.assign({}, state, {
      [action.swipeViewId]: action.swipeViewIndex
    });

    return newState;
  }

  return state;
}

export default swipeViewReducer;
