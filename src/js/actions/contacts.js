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

export function fetchContacts() {
  return async function(dispatch, getState) {
    dispatch(requestContacts());
    console.log('Started fetching contacts');
    const result = await Adapter.getContacts();
    dispatch(receiveContacts(result.contacts))
    console.log('Finished fetching contacts');
  }
}

