function chatReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      chat: null,
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_CHAT') {
    if(!action.status) {
      return Object.assign({}, state, {
        isFetching: true
      });
    } else if(action.status == 'success') {
      return Object.assign({}, state, {
        isFetching: false,
        chat: action.chat,
        receivedAt: action.receivedAt,
      });

    }
  }
  if (action.type === 'UPDATE_CHAT') {
    if(state.chat && (action.id == state.chat.id)) {
      return Object.assign({}, state, {
        chat: Object.assign({}, state.chat, action.update)
      })
    }
  }

  return state;
}

export default chatReducer;
