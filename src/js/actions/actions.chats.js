import { browserHistory } from 'react-router';

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
    if (chat.participants.length == 2) {
      const participant = chat.participants.filter((participant) => participant.id != id)[0];
      if (participant && participant.image) {
        return participant.image;
      }
    }
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

function startFetchChat() {
  return {
    type: 'FETCH_CHAT',
  }
}

function finishFetchChat(chat, status='success') {
  return {
    type: 'FETCH_CHAT',
    chat,
    status,
  }
}

export function fetchChat(id) {
  return async function(dispatch, getState) {
    dispatch(startFetchChat());
    const result = await config.adapter.getChat(id);
    dispatch(finishFetchChat(result.chat));
  }
}

function startFetchPrivateChat() {
  return {
    type: 'FETCH_PRIVATE_CHAT',
  }
}

function finishFetchPrivateChat(chat, status='success') {
  return {
    type: 'FETCH_PRIVATE_CHAT',
    chat,
    status,
  }
}

export function fetchPrivateChat(user) {
  return async function(dispatch, getState) {
    dispatch(startFetchPrivateChat());
    const result = await config.adapter.getPrivateChat(user.id);
    dispatch(finishFetchPrivateChat(result.chat));
    browserHistory.push(`${config.urlPrefix}conversation/${result.chat.id}`);
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

export function createChat(chat) {
  return async function(dispatch, getState) {
    dispatch(requestCreateChat());
    const result = await config.adapter.createChat(chat);
    dispatch(finishCreateChat(result.chat, result.status));
    browserHistory.push(`${config.urlPrefix}conversation/${result.chat.id}`);
    return result.chat.id;
  }
}

function requestUpdateChat() {
  return {
    type: 'UPDATE_CHAT',
  }
}

function finishUpdateChat(chat, status='success') {
  return {
    type: 'UPDATE_CHAT',
    chat,
    status,
  }
}

export function updateChat(chat) {
  return async function(dispatch, getState) {
    dispatch(requestUpdateChat());
    const result = await config.adapter.updateChat(chat);
    dispatch(finishUpdateChat(result.chat));
    return result.chat.id;
  }
}

function requestLeaveChat() {
  return {
    type: 'LEAVE_CHAT',
  }
}

function finishLeaveChat(status='success') {
  browserHistory.push(`${config.urlPrefix}/`);
  return {
    type: 'LEAVE_CHAT',
    status,
  }
}

export function leaveChat(chat) {
  return async function(dispatch, getState) {
    dispatch(requestLeaveChat());
    await config.adapter.leaveChat(chat);
    dispatch(finishLeaveChat());
  }
}

function startSendMessage() {
  return {
    type: 'SEND_MESSAGE',
  }
}

function finishSendMessage(status='success') {
  return {
    type: 'SEND_MESSAGE',
    status,
  }
}

export function sendMessage(chatId, message, attachment) {
  return async function(dispatch, getState) {
    dispatch(startSendMessage());
    const out = await config.adapter.sendMessage(chatId, message, attachment);
    dispatch(finishSendMessage());
    dispatch(handleChatEvent('NEW_MESSAGE', out));
  }
}
