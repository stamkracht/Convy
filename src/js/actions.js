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
