function authReducer(state, action) {
  if (state === undefined) {
    state = {
      isConnecting: false,
      isAuthenticated: false,
      receivedAt: null
    };
  }

  if (action.type === 'LOGIN') {
    if(!action.status) {
      return Object.assign({}, state, {
        isConnecting: true
      });
    } else if(action.status == 'success') {
      return Object.assign({}, state, {
        isConnecting: false,
        receivedAt: action.receivedAt,
        isAuthenticated: true,
      });
    } else {
      return Object.assign({}, state, {
        isConnecting: false,
        error: action.status,
        isAuthenticated: false,
      })
    }
  }

  if (action.type === 'LOGOUT') {
    if ( action.status == 'success' ) {
      return Object.assign({}, state, {
        isAuthenticated: false,
      })
    }
  }

  return state;
}

export default authReducer;
