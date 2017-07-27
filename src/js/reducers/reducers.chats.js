function chatsReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      isFetchingMessages: false,
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
      const chats = action.chats.reduce((mem, b) =>
        Object.assign({}, mem, { [b.id]: b }), {}
      );
      return Object.assign({}, state, {
        isFetching: false,
        chats,
      }, action.receivedAt && {receivedAt: action.receivedAt});

    }
  }
  if (action.type === 'FETCH_CHAT') {
    if (action.status == 'success') {
      // Set the chat in the dictionary
      return Object.assign({}, state, {
        chats: Object.assign({}, state.chats, {
          [action.chat.id]: action.chat,
        }),
      });

    }
  }
  if (action.type === 'UPDATE_CHAT') {
    if (action.status == 'success') {
      // Update the chat in the dictionary
      return Object.assign({}, state, {
        chats: Object.assign({}, state.chats, {
          [action.chat.id]: Object.assign({}, state.chats[action.chat.id], action.chat)
        }),
      });
    }
  }

  if (action.type === 'CREATE_CHAT') {
    if (!action.status) {
      return Object.assign({}, state, {
        isFetching: true
      });
    } else if (action.status == 'success') {
      const chat = action.chat;
      const chats = Object.assign({}, state.chats , { [chat.id]: chat });
      return Object.assign({}, state, {
        isFetching: false,
        chats,
      });
    }
  }

  if (action.type == 'FETCH_MESSAGES') {
    if (!action.status) {
      return Object.assign({}, state, {
        isFetchingMessages: true
      });
    } else if (action.status == 'success') {
      const messages = action.messages;
      const chat = Object.assign({}, state.chats[action.chatId], {messages})
      const chats = Object.assign({}, state.chats , { [action.chatId]: chat });
      return Object.assign({}, state, {
        isFetchingMessages: false,
        chats,
      });
    }
  }

  if (action.type == 'NEW_MESSAGE') {
    const message = action.message;
    const chatId = message.conversation;
    const messages = (!!state.chats[chatId].messages ?
      state.chats[chatId].messages.concat([message]) :
    [message]);
    let chat = Object.assign({}, state.chats[chatId], {
      lastMessage: message.content,
      lastMessageDate: message.created_at,
      messages: messages,
    });
    const chats = Object.assign({}, state.chats , { [chatId]: chat });
    return Object.assign({}, state, {
      receivedAt: action.receivedAt,
      chats,
    });
  }

  return state;
}

export default chatsReducer;
