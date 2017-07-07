import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions  from '../actions';
import ChatList from './scopes.chat-list';
import UserList from './scopes.user-list';
import SwipeableViews from 'react-swipeable-views';

class Main extends React.Component {
  render() {
    return (
      <main className="s-main">
        <SwipeableViews resistance index={this.props.swipeViewState[swipeViewId]} onChangeIndex={this.props.setSwipeViewIndex}>
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
        </SwipeableViews>
      </main>
    );
  }

  componentWillMount() {
    this.props.setMainHeader();
    //if (!this.props.contactsState.receivedAt) {
      this.props.fetchContacts();
    //}
    //if (!this.props.chatsState.receivedAt) {
      this.props.fetchChats();
    //}
  }

  getChatList() {
    return Object.values(this.props.chatsState.chats).sort(
      (a,b) => {
        const aa = a.lastMessageDate && new Date(a.lastMessageDate);
        const bb = b.lastMessageDate && new Date(b.lastMessageDate);
        if(aa && bb) {
          return aa > bb ? -1 : 1
        } else if (aa) {
          return -1
        } else if (bb) {
          return 1
        } else {
          return 0
        }
      }
    );
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
