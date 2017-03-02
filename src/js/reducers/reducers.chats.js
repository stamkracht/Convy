function chatsReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      chats: {},
      chatList: [],
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_CHATS') {
    if(!action.status) {
      return Object.assign({}, state, {
        isFetching: true
      });
    } else if(action.status == 'success') {
      // Update the dictionary and list
      const [chats, chatList] = action.chats.reduce((a, b) =>
        [Object.assign({}, a[0], { [b.id]: b }), [b.id].concat(a[1])], [{},[]]
      );
      return Object.assign({}, state, {
        isFetching: false,
        receivedAt: action.receivedAt,
        chats,
        chatList
      });

    }
  }
  if (action.type === 'FETCH_CHAT') {
    if(action.status == 'success') {
      // Set the chat in the dictionary
      return Object.assign({}, state, {
        chats: Object.assign({}, state.chats, {
          [action.chat.id]: action.chat
        }),
      });

    }
  }
  if (action.type === 'UPDATE_CHAT') {
    // Update the chat in the dictionary
    return Object.assign({}, state, {
      chats: Object.assign({}, state.chats, {
        [action.id]: Object.assign({}, state.chats[action.id], action.update)
      }),
    });
  }

  return state;
}

export default chatsReducer;
