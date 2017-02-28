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

function getChatImage(chat, id) {
  return chat.image || (chat.members.length == 2 &&
    chat.members.filter((member) => member.id != id)[0].image)
}

function receiveChat(chat, status='success') {
  return {
    type: 'FETCH_CHAT',
    chat,
    status,
  }
}

export function fetchChats() {
  return async function(dispatch, getState) {
    dispatch(requestChats());
    const result = await Adapter.getChats();
    const state = getState();
    dispatch(receiveChats(result.chats.map((chat) => {
      return Object.assign({}, chat, { image: getChatImage(chat, state.meState.me.id )})
    })));
  }
}

export function fetchChat(id) {
  return async function(dispatch, getState) {
    const result = await Adapter.getChat(id);
    dispatch(receiveChat(result.chat))
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
