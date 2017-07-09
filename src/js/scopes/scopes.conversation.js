import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { browserHistory } from 'react-router';

import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import ChatSettings from './scopes.chat-settings';
import Stats from './scopes.stats';

class Conversation extends React.Component {

  render() {
    let view,
        selfTalk;

    const chat = this.props.chatsState.chats[this.props.params.chatId];

    // Existing conversation
    if (chat) {
      if (chat.isPrivate && this.props.meState.me) {
        view = (
          <Profile
            isRoot={ selfTalk = chat.participants.length < 2 ? true : false }
            user={ chat.participants.filter(p => p.id != this.props.meState.me.id)[0] }
          />
        );
      } else {
        view = (
          <ChatSettings
            groupName={ chat.groupName }
            groupImage={ chat.groupImage }
            participants={ chat.participants }
            update={ (update) => this.updateChat(Object.assign({id: chat.id}, update)) }
            leave={ () => this.leaveChat({id: chat.id}) }
          />
        );
      }
    } else {
      view = (
        <ChatSettings
          groupName={ 'Group Name' }
          groupImage={ '' }
          participants={ [] }
          update={ (chat) => this.createChat(chat) }
          leave={ () => browserHistory.push(`${config.urlPrefix}/`) }
        />
      );
    }

    return (
      <main className="s-conversation">
        <SwipeableViews resistance index={this.props.swipeViewState[swipeViewId]} onChangeIndex={this.props.setSwipeViewIndex}>
          <Chat chat={ chat }/>
          { view }
        </SwipeableViews>
      </main>
    );
  }

  componentWillMount() {
    this.props.setChatHeader();
    this.props.setSwipeViewIndex(0);
  }

  componentWillReceiveProps(nextProps) {
    const me = nextProps.meState.me;
    if (this.props.meState.me != me) {
      if (this.props.params.chatId) {
        this.loadInitialData();
      }
    }
  }

  getParticipantIds(chat) {
    return chat.participants.filter((participant) =>
      participant.id != this.props.meState.id
    ).map(p => p.id);
  }

  async loadInitialData() {
    let chat;
    if (!this.props.chatsState.chats[this.props.params.chatId]) {
      // fetch the chat.
      await this.props.fetchChat(this.props.params.chatId);
    }
    chat = this.props.chatsState.chats[this.props.params.chatId];
    this.props.fetchMessages(chat.id);

    // fetch the contacts
    const participantIds = this.getParticipantIds(chat);
    const fetchParticipantIds = participantIds.filter(id => !this.props.contactsState.contacts[id]);
    if (fetchParticipantIds.length) {
      this.props.fetchContacts(fetchParticipantIds);
    }
  }

  createChat(chat) {
    console.log('create chat', chat);
    this.props.createChat(chat);
  }

  updateChat(chat) {
    console.log('update chat', chat);
    this.props.updateChat(chat);
  }

  leaveChat(chat) {
    console.log('leave chat', chat);
    this.props.leaveChat(chat);
  }
}

const swipeViewId = 'conversationSwipeView';

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChat: (id) => dispatch(actions.chats.fetchChat(id)),
    fetchContacts: (ids) => dispatch(actions.contacts.fetchContacts({ids})),
    fetchMessages: (id) => dispatch(actions.chats.fetchMessages(id)),
    setSwipeViewIndex: (index) => dispatch(actions.swipeView.setSwipeViewIndex(swipeViewId, index)),
    setChatHeader: () => dispatch(actions.header.setMode('CHAT')),
    createChat: (chat) => dispatch(actions.chats.createChat(chat)),
    updateChat: (chat) => dispatch(actions.chats.updateChat(chat)),
    leaveChat: (chat) => dispatch(actions.chats.leaveChat(chat)),
  };
};

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
