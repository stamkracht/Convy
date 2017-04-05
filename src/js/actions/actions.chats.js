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

function startUpdateLastSeen() {
  return {
    type: 'UPDATE_LAST_SEEN',
  }
}

function finishUpdateLastSeen(status='success') {
  return {
    type: 'UPDATE_LAST_SEEN',
    status,
  }
}

export function updateLastSeen(chatId) {
  return async function(dispatch, getState) {
    dispatch(startUpdateLastSeen());
    await config.adapter.updateLastSeen(chatId);
    dispatch(finishUpdateLastSeen());
  }

}

export function handleChatEvent(event, payload) {
  // Ouput action based on event and payload
  return {
    type: 'UPDATE_CHAT',
    id,
    update,
  }
}

export function subscribeToChatEvents(chatCallback) {
  config.adapter.subscribeToChatEvents(chatCallback);
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
    chat,
    status,
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
