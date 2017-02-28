import Adapter from '../adapter'


function requestContacts() {
  return {
    type: 'FETCH_CONTACTS',
  }
}

function receiveContacts(contacts, status='success') {
  return {
    type: 'FETCH_CONTACTS',
    receivedAt: Date.now(),
    contacts,
    status,
  }
}

function receiveContact(contact, status='success') {
  return {
    type: 'FETCH_CONTACT',
    contact,
    status,
  }
}

export function fetchContacts() {
  return async function(dispatch, getState) {
    dispatch(requestContacts());
    const result = await Adapter.getContacts();
    dispatch(receiveContacts(result.contacts))
  }
}

export function fetchContact(id) {
  return async function(dispatch, getState) {
    const result = await Adapter.getContact(id);
    dispatch(receiveContact(result.contact))
  }
}
