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

    const chat = this.state && this.props.chatsState.chats[this.state.chatId];

    if (chat) {
      let group = chat.members.length > 2;
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
      } else if (this.state.contactId && this.props.contactsState.contacts[this.state.contactId]) {
        view = <Profile
          isRoot={ false }
          user={ this.props.contactsState.contacts[this.state.contactId] }
        />
      }
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

  componentWillMount() {
    this.props.setChatHeader();

    if (this.props.params.chatId) { this.loadInitialData(); }
  }

  getContactId(chat) {
    return chat.members.filter((member) =>
      member.id != this.props.meState.id
    )[0].id;
  }

  async loadInitialData() {
    if (!this.props.chatsState.chats[this.props.params.chatId]) {
      // fetch the chat.
      const chat = this.props.chatsState.chats[this.props.params.chatId];
      const contactId = this.getContactId(chat);

      await this.props.fetchChat(this.props.params.chatId);

      this.setState({
        chatId: this.props.params.chatId,
      });

      if (!this.props.contactsState.contacts[contactId]) {
        // fetch the contact.
        await this.props.fetchContact(contactId);
      }

      this.setState({ contactId });
    } else {
      const chat = this.props.chatsState.chats[this.props.params.chatId];
      const contactId = this.getContactId(chat);

      this.setState({
        chatId: this.props.params.chatId,
      });

      if(!this.props.contactsState.contacts[contactId]) {
        // fetch the contact.
        await this.props.fetchContact(contactId);
      }

      this.setState({ contactId })
    }
  }
}

const swipeViewId = 'conversationSwipeView';

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChat: (id) => dispatch(actions.chats.fetchChat(id)),
    fetchContact: (id) => dispatch(actions.contacts.fetchContact(id)),
    setSwipeViewIndex: (index) => dispatch(actions.swipeView.setSwipeViewIndex(swipeViewId, index)),
    setChatHeader: () => dispatch(actions.header.setMode('CHAT')),
  };
};

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
