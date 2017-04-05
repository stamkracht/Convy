function authReducer(state, action) {
  if (state === undefined) {
    state = {
      isConnecting: false,
      authenticated: false,
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
        authenticated: true,
      });
    } else {
      return Object.assign({}, state, {
        isConnecting: false,
        error: action.status,
        authenticated: false,
      })
    }
  }

  return state;
}

export default authReducer;
