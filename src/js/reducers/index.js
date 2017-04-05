import { combineReducers } from 'redux';
import headerReducer from './reducers.header';
import contactsReducer from './reducers.contacts';
import chatsReducer from './reducers.chats';
import meReducer from './reducers.me';
import authReducer from './reducers.auth';
import swipeViewReducer from './reducers.swipe-view';

// combine the reducers.
const convyReducers = {
  headerState: headerReducer,
  contactsState: contactsReducer,
  chatsState: chatsReducer,
  meState: meReducer,
  authState: authReducer,
  swipeViewState: swipeViewReducer
};

export default combineReducers(convyReducers)
