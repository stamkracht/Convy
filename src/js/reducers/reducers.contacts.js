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
      // Update the dictionary and list
      const [contacts, contactList] = action.contacts.reduce((a, b) =>
          [Object.assign({}, a[0], { [b.id]: b }), [b.id].concat(a[1])], [{},[]]
      );
      return Object.assign({}, state, {
        isFetching: false,
        receivedAt: action.receivedAt,
        contacts,
        contactList,
      });

    }
  }

  if (action.type === 'FETCH_CONTACT') {
    if(action.status == 'success') {
      // Set the contact in the dictionary
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
