import React from 'react';

import SwipeView from './scopes.swipe-view';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import ChatSettings from './scopes.chat-settings';
import Stats from './scopes.stats';
import { connect } from 'react-redux';
import actions from '../actions';

class Conversation extends React.Component {
  render() {
    let view;
    let group = false;
    let groupNew = true;
    let groupName = 'We are TMNT';
    let groupImage = 'http://placehold.it/500x200';
    let participants = [];

    if (group) {
      view = <ChatSettings
        groupNew={ groupNew }
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
        >
          <Chat chat={this.props.chatState.chat}/>
          { view }
          <Stats/>
        </SwipeView>
      </main>
    );
  }

  componentWillMount() {
    if (this.props.params.chatId) {
      this.props.fetchChat(this.props.params.chatId);
    }
  }

}

const swipeViewId = 'conversationSwipeView';
const mapStateToProps = (state, ownProps) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChat: (id) => {
      dispatch(actions.chat.fetchChat(id));
    },
    setSwipeViewIndex: (index) => {
      dispatch(actions.swiper.setSwipeViewIndex(swipeViewId, index));
    },
  };
};

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
