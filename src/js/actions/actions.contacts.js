import config from '../config'


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
    const result = await config.adapter.getContacts();
    dispatch(receiveContacts(result.contacts))
  }
}

export function fetchContact(id) {
  return async function(dispatch, getState) {
    const result = await config.adapter.getContact(id);
    dispatch(receiveContact(result.contact))
  }
}

export function handleContactEvent(event, payload) {
  // Ouput action based on event and payload
  return {
    type: 'UPDATE_CONTACT',
    id,
    update,
  }
}


export function subscribeToContactEvents(contactCallback) {
  config.adapter.subscribeToContactEvents(contactCallback);
}
