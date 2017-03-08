import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions  from '../actions';
import SwipeView from './scopes.swipe-view';
import UserList from './scopes.user-list';

class Main extends React.Component {
  render() {
    return (
      <main className="s-main">
        <SwipeView swipeViewId={ swipeViewId }>
          <UserList
            listType={ 'chats' }
            users={ this.getChatList() }
            searchPlaceholder={ 'Search conversations' }
            emptyMessage={ 'Tap on one of the icons above to start a conversation.' }
            searchResults={ () => { console.info('Show search results of the chats.'); } }
          />
          <UserList
            listType={ 'contacts' }
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
    return this.props.chatsState.chatList.map((id) =>
      this.props.chatsState.chats[id]
    )
  }

  getContactList() {
    return this.props.contactsState.contactList.map((id) =>
      this.props.contactsState.contacts[id]
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
