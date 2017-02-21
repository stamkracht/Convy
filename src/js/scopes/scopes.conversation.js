import React from 'react';

import SwipeView from './scopes.swipe-view';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import ChatSettings from './scopes.chat-settings';
import Stats from './scopes.stats';
import { connect } from 'react-redux';
import { setSwipeViewIndex } from '../actions/actions';

class Conversation extends React.Component {
  render() {
    let view;
    let group = false;
    let groupName = 'We are TMNT';
    let groupImage = 'http://placehold.it/500x200';
    let participants = [];

    if (group) {
      view = <ChatSettings
        groupName={ groupName }
        groupImage={ groupImage }
        participants={ participants }
      />
    } else {
      view = <Profile/>
    }

    return (
      <main className="s-conversation">
        <SwipeView
          swipeViewId={ swipeViewId }
          swipeViewUrls={ swipeViewUrls }
          swipeViewBaseUrl={ swipeViewBaseUrl }
        >
          <Chat/>
          { view }
          <Stats/>
        </SwipeView>
      </main>
    );
  }

  _handleUrl(swipeView) {
    // move to specific view based on the url.
    const currentPath = swipeView || '/';
    this.props.setSwipeViewIndex(swipeViewUrls.indexOf(currentPath));
  }

  componentWillMount() {
    // only handle urls that are not root page.
    if (this.props.params.swipeView) {
      this._handleUrl(this.props.params.swipeView)
    }
  }

  componentWillReceiveProps(nextProps) {
    // check for changing url.
    if (nextProps.params.swipeView != this.props.params.swipeView) {
      this._handleUrl(nextProps.params.swipeView)
    }
  }
}

const swipeViewId = 'conversationSwipeView';
const swipeViewBaseUrl = '/conversation';
const swipeViewUrls = [
  '/',        // first child of SwipeView.
  'profile',  // second child of SwipeView.
  'stats'     // third child of SwipeView.
];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSwipeViewIndex: (index) => {
      dispatch(setSwipeViewIndex(swipeViewId, index));
    },
  };
};

const ConversationConnect = connect(null, mapDispatchToProps)(Conversation);

export default ConversationConnect;
