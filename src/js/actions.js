export function openChat(id) {
  console.log('open chat action');
  return {
    type: 'OPEN_CHAT',
    title: 'title name',
    id: id,
  }
}

export function closeChat() {
  console.log('close chat action');
  return {
    type: 'CLOSE_CHAT',
  }
}
