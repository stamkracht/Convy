function contactsReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      contacts: [],
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_CONTACTS') {
    if(!action.status) {
      return Object.assign({}, state, {
        isFetching: true
      });
    } else if(action.status == 'success') {
      return Object.assign({}, state, {
        isFetching: false,
        contacts: action.contacts,
        receivedAt: action.receivedAt,
      });

    }
  }

  return state;
}

export default contactsReducer;
