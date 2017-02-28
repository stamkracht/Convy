import { combineReducers } from 'redux';

import headerReducer from './reducers.header';
import contactsReducer from './reducers.contacts';
import chatsReducer from './reducers.chats';
import chatReducer from './reducers.chat';
import meReducer from './reducers.me';
import swipeViewReducer from './reducers.swipe-view';

// combine the reducers.
const reducers = combineReducers({
  headerState: headerReducer,
  contactsState: contactsReducer,
  chatsState: chatsReducer,
  chatState: chatReducer,
  meState: meReducer,
  swipeViewState: swipeViewReducer
});

export default reducers;
