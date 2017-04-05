import config from '../config'


function requestLogin() {
  return {
    type: 'LOGIN',
  }
}

function receiveLogin(status='success') {
  return {
    type: 'LOGIN',
    receivedAt: Date.now(),
    status,
  }
}

export function login(identifier, password) {
  return async function(dispatch, getState) {
    dispatch(requestLogin());
    try {
      await config.adapter.login(identifier, password);
      dispatch(receiveLogin())
    } catch (e) {
      dispatch(receiveLogin(e))
    }
  }
}


