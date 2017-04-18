import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import SwipeView from './scopes.swipe-view';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import ChatSettings from './scopes.chat-settings';
import Stats from './scopes.stats';

class Conversation extends React.Component {

  render() {
    let view;

    const chat = this.props.chatsState.chats[this.props.params.chatId];

    // Existing conversation
    if (chat) {
      if ( chat.isPrivate ) {
        view = (
          <Profile
            isRoot={ !!chat.participants.length }
            user={ chat.participants.filter(p => p.id != this.props.meState.me.id)[0] }
          />
        );
      } else {
        view = (
          <ChatSettings
            groupName={ chat.groupName }
            groupImage={ chat.groupImage }
            participants={ chat.participants }
            update={ (chat) => this.updateChat(chat) }
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
        />
      );
    }

    return (
      <main className="s-conversation">
        <SwipeView swipeViewId={ swipeViewId }>
          <Chat chat={ chat }/>
          { view }
          <Stats/>
        </SwipeView>
      </main>
    );
  }

  componentDidMount() {
    this.props.setChatHeader();

    if (this.props.params.chatId) {
      this.loadInitialData();
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
  };
};

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
