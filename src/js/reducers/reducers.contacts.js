function contactsReducer(state, action) {
  if (state === undefined) {
    state = {
      isFetching: false,
      contactList: [],
      contacts: {},
      receivedAt: null
    };
  }

  if (action.type === 'FETCH_CONTACTS') {
    if(!action.status) {
      return Object.assign({}, state, {
        isFetching: true
      });
    } else if(action.status == 'success') {
      const [contactDict, contactList] = action.contacts.reduce((a, b) =>
          [Object.assign({}, a[0], { [b.id]: b }), [b.id].concat(a[1])], [{},[]]
      );
      return Object.assign({}, state, {
        isFetching: false,
        contacts: contactDict,
        contactList: contactList,
        receivedAt: action.receivedAt,
      });

    }
  }

  if (action.type === 'FETCH_CONTACT') {
    if(action.status == 'success') {
      return Object.assign({}, state, {
        contacts: Object.assign({}, state.contacts, {
          [action.contact.id]: action.contact
        }),
      });

    }
  }

  return state;
}

export default contactsReducer;
