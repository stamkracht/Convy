function meReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      isConnecting: false,
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
  else if (action.type === 'LOGIN') {
    if(!action.status) {
      return Object.assign({}, state, {
        isConnecting: true
      });
    } else if(action.status == 'success') {
      return Object.assign({}, state, {
        isConnecting: false,
        receivedAt: action.receivedAt,
      });
    } else {
      return Object.assign({}, state, {
        isConnecting: false,
        error: action.status
      })
    }
  }

  return state;
}

export default meReducer;
