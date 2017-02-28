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

  return state;
}

export default chatsReducer;
