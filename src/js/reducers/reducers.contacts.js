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
      const contacts = action.contacts.reduce((a, b) =>
          Object.assign({}, a, { [b.id]: b }), state.contacts
      );
      const contactList = Object.keys(contacts);
      return Object.assign({}, state, {
        isFetching: false,
        contacts,
        contactList,
      }, action.receivedAt && {receivedAt: action.receivedAt});

    }
  }

  else if (action.type === 'FETCH_CONTACT') {
    if(action.status == 'success') {
      // Set the contact in the dictionary
      return Object.assign({}, state, {
        contacts: Object.assign({}, state.contacts, {
          [action.contact.id]: action.contact
        }),
      });

    }
  }

  else if (action.type === 'UPDATE_CONTACT') {
    // Update the chat in the dictionary
    return Object.assign({}, state, {
      contacts: Object.assign({}, state.contacts, {
        [action.id]: Object.assign({}, state.contacts[action.id], action.update)
      }),
    });
  }

  return state;
}

export default contactsReducer;