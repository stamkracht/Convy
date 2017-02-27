import { browserHistory } from 'react-router';

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
