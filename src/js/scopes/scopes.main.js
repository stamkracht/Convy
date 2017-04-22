import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions  from '../actions';
import SwipeView from './scopes.swipe-view';
import ChatList from './scopes.chat-list';
import UserList from './scopes.user-list';

class Main extends React.Component {
  render() {
    return (
      <main className="s-main">
        <SwipeView swipeViewId={ swipeViewId }>
          <ChatList
            chats={ this.getChatList() }
            searchPlaceholder={ 'Search conversations' }
            emptyMessage={ 'Tap on one of the icons above to start a conversation.' }
            searchResults={ () => { console.info('Show search results of the chats.'); } }
          />
          <UserList
            users={ this.getContactList() }
            searchPlaceholder={ 'Search contacts' }
            emptyMessage={ 'Please wait for participants to join the platform.' }
            searchResults={ () => { console.info('Show search results of the contacts.'); } }
          />
        </SwipeView>
      </main>
    );
  }

  componentWillMount() {
    this.props.setMainHeader();
    if (!this.props.contactsState.receivedAt) {
      this.props.fetchContacts();
    }
    if (!this.props.chatsState.receivedAt) {
      this.props.fetchChats();
    }
  }

  getChatList() {
    const chats = this.props.chatsState.chats;
    return Object.keys(chats).map((id) =>
      chats[id]
    )
  }

  getContactList() {
    const contacts = this.props.contactsState.contacts;
    return Object.keys(contacts).map((id) =>
      contacts[id]
    )
  }
}

const swipeViewId = 'mainSwipeView';

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSwipeViewIndex: (index) => {
      dispatch(actions.swipeView.setSwipeViewIndex(swipeViewId, index));
    },
    fetchContacts: () => {
      dispatch(actions.contacts.fetchContacts())
    },
    fetchChats: () => {
      dispatch(actions.chats.fetchChats())
    },
    setMainHeader: () => {
      dispatch(actions.header.setMode('MAIN'))
    }
  };
};

const MainConnect = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainConnect;
