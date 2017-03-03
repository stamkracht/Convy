import React from 'react';

import SwipeView from './scopes.swipe-view';
import UserList from './scopes.user-list';
import { connect } from 'react-redux';
import { setSwipeViewIndex } from '../actions/actions';

class Main extends React.Component {
  render() {
    let chats = [
      {
        id: 1,
        firstName: 'Joshua',
        lastName: 'Torres',
        lastMessage: 'Nam porttitor blandit accu...',
        imageSource: 'http://placehold.it/50x50',
        lastMessageDate: '17:03',
        unreadMessagesLength: 7,
      },
      {
        id: 2,
        firstName: 'Vincent',
        lastName: 'Gray',
        lastMessage: 'Accusamus, ducimus hic qui...',
        imageSource: 'http://placehold.it/50x50',
        lastMessageDate: '17:03',
        unreadMessagesLength: 4,
      },
      {
        id: 3,
        firstName: 'Marthia',
        lastName: 'Diaz',
        lastMessage: 'Cupiditate sit laudantium ...',
        imageSource: 'http://placehold.it/50x50',
        lastMessageDate: '17:03',
        unreadMessagesLength: 2,
      },
    ];

    let contacts = [
      {
        id: 4,
        firstName: 'John',
        lastName: 'Doe',
        description: 'Frontend Developer',
        imageSource: 'http://placehold.it/50x50',
        lastSeenDate: '17:03',
      },
      {
        id: 5,
        firstName: 'Paul',
        lastName: 'Graham',
        description: 'Interaction Designer',
        imageSource: 'http://placehold.it/50x50',
        lastSeenDate: '17:03',
      },
      {
        id: 6,
        firstName: 'Shirley',
        lastName: 'Reid',
        description: 'Backend Developer',
        imageSource: 'http://placehold.it/50x50',
        lastSeenDate: '17:03',
      },
    ];

    return (
      <main className="s-main">
        <SwipeView
          swipeViewId={ swipeViewId }
          swipeViewUrls={ swipeViewUrls }
          swipeViewBaseUrl={ swipeViewBaseUrl }
        >
          <UserList
            listType={ 'chats' }
            users={ chats }
            searchPlaceholder={ 'Search conversations' }
            emptyMessage={ 'Tap on one of the icons above to start a conversation.' }
            searchResults={ () => { console.info('Show search results of the chats.'); } }
          />
          <UserList
            listType={ 'contacts' }
            users={ contacts }
            searchPlaceholder={ 'Search contacts' }
            emptyMessage={ 'Please wait for participants to join the platform.' }
            searchResults={ () => { console.info('Show search results of the contacts.'); } }
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSwipeViewIndex: (index) => {
      dispatch(setSwipeViewIndex(swipeViewId, index));
    },
  };
};

const MainConnect = connect(null, mapDispatchToProps)(Main);

export default MainConnect;
