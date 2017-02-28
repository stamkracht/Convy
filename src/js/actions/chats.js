import Adapter from '../adapter'
import store from '../store'

function requestChats() {
  return {
    type: 'FETCH_CHATS',
  }
}

function receiveChats(chats, status='success') {
  return {
    type: 'FETCH_CHATS',
    receivedAt: Date.now(),
    chats,
    status,
  }
}

export function fetchChats() {
  return async function(dispatch, getState) {
    dispatch(requestChats());
    console.log('Started fetching chats');
    const result = await Adapter.getChats();
    dispatch(receiveChats(result.chats))
    console.log('Finished fetching chats');
  }
}

function chatCallback(id, update) {
  store.dispatch({
    type: 'UPDATE_CHAT',
    id,
    update,
  })
}

export function subscribeToChats() {
  Adapter.subscribeToChats(chatCallback);
}

export function unsubscribeToChats() {
  Adapter.unsubscribeToChats(chatCallback);
}
