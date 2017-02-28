function chatsReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      chats: [],
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_CHATS') {
    if(!action.status) {
      return Object.assign({}, state, {
        isFetching: true
      });
    } else if(action.status == 'success') {
      return Object.assign({}, state, {
        isFetching: false,
        chats: action.chats,
        receivedAt: action.receivedAt,
      });

    }
  }
  if (action.type === 'UPDATE_CHAT') {
    return Object.assign({}, state, {
      chats: state.chats.map((chat) => {
        if(action.id == chat.id) {
          return Object.assign({}, chat, action.update)
        }
        return chat
      }),
    });
  }

  return state;
}

export default chatsReducer;
