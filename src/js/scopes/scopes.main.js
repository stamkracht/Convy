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

  componentWillMount() {
    this.props.fetchContacts();
    this.props.fetchChats();
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
    }
  };
};

const MainConnect = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainConnect;
