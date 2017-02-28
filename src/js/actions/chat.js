import Adapter from '../adapter'

function requestChat() {
  return {
    type: 'FETCH_CHAT',
  }
}

function receiveChat(chat, status='success') {
  return {
    type: 'FETCH_CHAT',
    receivedAt: Date.now(),
    chat,
    status,
  }
}

export function fetchChat() {
  return async function(dispatch, getState) {
    dispatch(requestChat());
    console.log('Started fetching chat');
    const result = await Adapter.getChat();
    dispatch(receiveChat(result.chat))
    console.log('Finished fetching chat');
  }
}

