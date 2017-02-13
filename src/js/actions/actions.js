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

export function toggleNavMore() {
  console.info('Toggle the nav-more navigation.');

  return {
    type: 'TOGGLE_NAV_MORE',
  }
}
