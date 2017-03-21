import config from '../config'

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
    const result = await config.adapter.getChats();
    const state = getState()[config.stateName];
    dispatch(receiveChats(result.chats.map((chat) => {
      return Object.assign({}, chat, { image: getChatImage(chat, state.meState.me.id )})
    })));
  }
}

export function fetchChat(id) {
  return async function(dispatch, getState) {
    const result = await config.adapter.getChat(id);
    dispatch(receiveChat(result.chat))
  }
}

export function updateChat(id, update) {
  return {
    type: 'UPDATE_CHAT',
    id,
    update,
  }
}

export function subscribeToChats(chatCallback) {
  config.adapter.subscribeToChats(chatCallback);
}


function requestCreateChat() {
  return {
    type: 'CREATE_CHAT',
  }
}

function finishCreateChat(chat, status='success') {
  return {
    type: 'CREATE_CHAT',
    receivedAt: Date.now(),
    status,
    chat,
  }
}

export function createChat(participantIds) {
  return async function(dispatch, getState) {
    dispatch(requestCreateChat());
    const result = await config.adapter.createChat(participantIds);
    dispatch(finishCreateChat(result.chat, result.status));
    return result.chat.id;
  }

}
