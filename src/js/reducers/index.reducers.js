import { combineReducers } from 'redux';

import headerReducer from './reducers.header';
import contactsReducer from './reducers.contacts';
import chatsReducer from './reducers.chats';
import swipeViewReducer from './reducers.swipe-view';

// combine the reducers.
const reducers = combineReducers({
  headerState: headerReducer,
  contactsState: contactsReducer,
  chatsState: chatsReducer,
  swipeViewState: swipeViewReducer
});

export default reducers;
