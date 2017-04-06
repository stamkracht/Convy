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

function requestMessages() {
  return {
    type: 'FETCH_MESSAGES',
  }
}

function receiveMessages(chatId, messages, status='success') {
  return {
    type: 'FETCH_MESSAGES',
    chatId,
    messages,
    status,
  }
}

function getChatImage(chat, id) {
  if (chat.image) {
    return chat.image;
  } else {
    if(chat.participants.length == 2) {
      const participant = chat.participants.filter((participant) => participant.id != id)[0];
      if(participant && participant.image) {
        return participant.image
      }
    }
  }
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

export function fetchMessages(chatId) {
  return async function(dispatch, getState) {
    dispatch(requestMessages());
    const result = await config.adapter.getMessages(chatId);
    dispatch(receiveMessages(chatId, result.messages))
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
  if (event == 'NEW_MESSAGE') {
    return {
      type: 'NEW_MESSAGE',
      message: payload,
    }
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
