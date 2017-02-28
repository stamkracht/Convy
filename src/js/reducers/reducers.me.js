function meReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      me: null,
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_ME') {
    if(!action.status) {
      return Object.assign({}, state, {
        isFetching: true
      });
    } else if(action.status == 'success') {
      return Object.assign({}, state, {
        isFetching: false,
        me: action.me,
        receivedAt: action.receivedAt,
      });

    }
  }

  return state;
}

export default meReducer;
