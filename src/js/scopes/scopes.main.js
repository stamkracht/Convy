import React from 'react';

import SwipeView from './scopes.swipe-view';
import Adapter from '../adapter'
import UserList from './scopes.user-list';
import { connect } from 'react-redux';
import actions  from '../actions';

class Main extends React.Component {

  render() {

    return (
      <main className="s-main">
        <SwipeView
          swipeViewId={ swipeViewId }
          swipeViewUrls={ swipeViewUrls }
          swipeViewBaseUrl={ swipeViewBaseUrl }
        >
          <UserList
            listType={ 'chats' }
            users={ this.props.chatsState.chats }
            searchPlaceholder={ 'Search conversations' }
            emptyMessage={ 'Tap on one of the icons above to start a conversation.' }
          />
          <UserList
            listType={ 'contacts' }
            users={ this.props.contactsState.contacts }
            searchPlaceholder={ 'Search contacts' }
            emptyMessage={ 'Please wait for participants to join the platform.' }
          />
        </SwipeView>
      </main>
    );
  }

  handleUrl(swipeView) {
    // move to specific view based on the url.
    const currentPath = swipeView || '/';
    this.props.setSwipeViewIndex(swipeViewUrls.indexOf(currentPath));
  }

  componentWillMount() {
    this.props.fetchContacts();
    this.props.fetchChats();

    // only handle urls that are not root page.
    if (this.props.params.swipeView) {
      this.handleUrl(this.props.params.swipeView)
    }
  }

  componentWillReceiveProps(nextProps) {
    // check for changing url.
    if(nextProps.params.swipeView != this.props.params.swipeView) {
      this.handleUrl(nextProps.params.swipeView)
    }
  }
}

const swipeViewId = 'mainSwipeView';
const swipeViewBaseUrl = '';
const swipeViewUrls = [
  '/',            // first child of SwipeView.
  'contact-list'  // second child of SwipeView.
];

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
    }
  };
};

const MainConnect = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainConnect;
