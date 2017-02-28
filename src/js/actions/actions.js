import { browserHistory } from 'react-router';
import Adapter from '../adapter'

export function openChat(id) {
  console.info('Open a conversation.');

  return {
    id: id,
    type: 'OPEN_CHAT',
  }
}

export function closeChat() {
  console.info('Close a conversation.');

  return {
    type: 'CLOSE_CHAT',
  }
}

export function openMyProfile(id) {
  console.info('Open my profile.');

  return {
    id: id,
    type: 'OPEN_MY_PROFILE',
  }
}

export function closeMyProfile() {
  console.info('Close my profile.');

  return {
    type: 'CLOSE_MY_PROFILE',
  }
}

export function toggleNavMore() {
  console.info('Toggle the nav-more navigation.');

  return {
    type: 'TOGGLE_NAV_MORE',
  }
}

export function setSwipeViewIndex(swipeViewId, swipeViewIndex, url_path) {
  console.info('Set swipe view index.');

  if (url_path || url_path === '') {
    console.log('Replace url in browser history.', url_path);
    browserHistory.replace(url_path);

    // Another option is to push the url so it is actually added in de browser history
    // browserHistory.push(url_path);
  }

  return {
    type: 'SET_SWIPE_VIEW_INDEX',
    swipeViewId,
    swipeViewIndex
  }
}

function requestContacts() {
  return {
    type: 'FETCH_CONTACTS',
  }
}

function receiveContacts(contacts, status='success') {
  return {
    type: 'FETCH_CONTACTS',
    receivedAt: Date.now(),
    contacts,
    status,
  }
}

export function fetchContacts() {
  return async function(dispatch, getState) {
    dispatch(requestContacts());
    console.log('Started fetching contacts');
    const result = await Adapter.getContacts();
    dispatch(receiveContacts(result.contacts))
    console.log('Finished fetching contacts');
  }
}

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
    const result = await Adapter.getMe();
    dispatch(receiveMe(result.user))
    console.log('Finished fetching me');
  }
}
