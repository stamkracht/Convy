import config from '../config'


function requestLogin() {
  return {
    type: 'LOGIN',
  }
}

export function receiveLogin(status='success') {
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

function requestLogout() {
  return {
    type: 'LOGOUT',
  }
}

export function receiveLogout(status='success') {
  return {
    type: 'LOGOUT',
    receivedAt: Date.now(),
    status,
  }
}

export function logout() {
  return async function(dispatch, getState) {
    dispatch(requestLogout());
    try {
      await config.adapter.logout();
      dispatch(receiveLogout())
    } catch (e) {
      dispatch(receiveLogout(e))
    }
  }
}

export function authenticate() {
  return async function(dispatch, getState) {
    const authenticated = await config.adapter.isAuthenticated();
    if(authenticated) {
      dispatch(receiveLogin())
    }
  }
}

