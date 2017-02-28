import React from 'react';

import SwipeView from './scopes.swipe-view';
import Adapter from '../adapter'
import UserList from './scopes.user-list';
import { connect } from 'react-redux';
import actions  from '../actions';

class Main extends React.Component {

  _getChatList() {
    return this.props.chatsState.chatList.map((id) =>
      this.props.chatsState.chats[id]
    )
  }

  _getContactList() {
    return this.props.contactsState.contactList.map((id) =>
      this.props.contactsState.contacts[id]
    )
  }

  render() {

    return (
      <main className="s-main">
        <SwipeView
          swipeViewId={ swipeViewId }
        >
          <UserList
            listType={ 'chats' }
            users={ this._getChatList() }
            searchPlaceholder={ 'Search conversations' }
            emptyMessage={ 'Tap on one of the icons above to start a conversation.' }
          />
          <UserList
            listType={ 'contacts' }
            users={ this._getContactList() }
            searchPlaceholder={ 'Search contacts' }
            emptyMessage={ 'Please wait for participants to join the platform.' }
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

}

const swipeViewId = 'mainSwipeView';

const mapStateToProps = (state, ownProps) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSwipeViewIndex: (index) => {
      dispatch(actions.swiper.setSwipeViewIndex(swipeViewId, index));
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
