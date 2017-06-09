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
      const [chats, chatList] = action.chats.reduce((a, b) =>
        [Object.assign({}, a[0], { [b.id]: b }), [b.id].concat(a[1])], [{},[]]
      );
      return Object.assign({}, state, {
        isFetching: false,
        chats,
        chatList
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
      const chatList = [chat.id].concat(state.chatList);
      return Object.assign({}, state, {
        isFetching: false,
        chats,
        chatList
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
    let chat = Object.assign({}, state.chats[chatId], {
      lastMessage: message.content,
      lastMessageDate: message.created_at,
    })
    if ( !!state.chats[chatId].messages ) {
      const messages = state.chats[chatId].messages.concat([message])
      chat = Object.assign({}, state.chats[chatId], {
        messages: messages,
      })
    }
    const chats = Object.assign({}, state.chats , { [chatId]: chat });
    return Object.assign({}, state, {
      receivedAt: action.receivedAt,
      chats,
    });
  }

  return state;
}

export default chatsReducer;
