import config from '../config'


function requestMe() {
  return {
    type: 'FETCH_ME',
  }
}

function receiveMe(me, status='success') {
  return {
    type: 'FETCH_ME',
    receivedAt: Date.now(),
    me,
    status,
  }
}

export function fetchMe() {
  return async function(dispatch, getState) {
    dispatch(requestMe());
    console.log('Started fetching me');
    const result = await config.adapter.getMe();
    dispatch(receiveMe(result.user))
    console.log('Finished fetching me');
  }
}


