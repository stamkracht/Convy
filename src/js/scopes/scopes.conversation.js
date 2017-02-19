import React from 'react';

import SwipeView from './scopes.swipe-view';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import Stats from './scopes.stats';
import { connect } from 'react-redux';
import { setSwipeViewIndex } from '../actions/actions';

class Conversation extends React.Component {
  render() {
    return (
      <main className="s-conversation">
        <SwipeView swipeViewId={swipeViewId}
                   swipeViewUrls={swipeViewUrls}
                   swipeViewBaseUrl={swipeViewBaseUrl}
        >
          <Chat/>
          <Profile/>
          <Stats/>
        </SwipeView>
      </main>
    );
  }

  _handleUrl(swipeView) {
    // Move to specific view based on the url
    const currentPath = swipeView || '/';
    this.props.setSwipeViewIndex(swipeViewUrls.indexOf(currentPath));
  }

  componentWillMount() {
    // Only handle urls that are not root page
    if (this.props.params.swipeView) {
      this._handleUrl(this.props.params.swipeView)
    }
  }

  componentWillReceiveProps(nextProps) {
    // Check for changing url
    if(nextProps.params.swipeView != this.props.params.swipeView) {
      this._handleUrl(nextProps.params.swipeView)
    }
  }
}

const swipeViewId = 'conversationSwipeView';
const swipeViewBaseUrl = '/conversation';
const swipeViewUrls = [
  '/',        // First child of SwipeView
  'profile',  // Second child of SwipeView
  'stats'     // Third child of SwipeView
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
