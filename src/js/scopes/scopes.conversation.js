import React from 'react';

import SwipeView from './scopes.swipe-view';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import ChatSettings from './scopes.chat-settings';
import Stats from './scopes.stats';
import { connect } from 'react-redux';
import actions from '../actions';
import Adapter from '../adapter'

class Conversation extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  _getContactId(chat) {
    return chat.members.filter((member) =>
      member.id != this.props.meState.id
    )[0].id;
  }

  render() {
    let view;
    const loaded = this.state.chat;

    if(loaded) {
      let group = this.state.chat.members.length > 2;
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
      } else if(this.state.contact) {
          view = <Profile isRoot={false} user={this.state.contact} />
      }
    }

    return (
      <main className="s-conversation">
        <SwipeView
          swipeViewId={ swipeViewId }
        >
          <Chat chat={this.state.chat}/>
          { view }
          <Stats/>
        </SwipeView>
      </main>
    );
  }

  async _loadInitialData() {
    if(!this.props.chatsState.chats[this.props.params.chatId]) {
      // Fetch the chat
      await this.props.fetchChat(this.props.params.chatId);
      const chat = this.props.chatsState.chats[this.props.params.chatId];
      this.setState({chat});
      const contactId = this._getContactId(chat);
      if(!this.props.contactsState.contacts[contactId]) {
        // Fetch the contact
        await this.props.fetchContact(contactId);
      }
      this.setState({contact: this.props.contactsState.contacts[contactId]})
    } else {
      const chat = this.props.chatsState.chats[this.props.params.chatId];
      this.setState({chat});
      const contactId = this._getContactId(chat);
      if(!this.props.contactsState.contacts[contactId]) {
        // Fetch the contact
        await this.props.fetchContact(contactId);
      }
      this.setState({contact: this.props.contactsState.contacts[contactId]})
    }
  }

  componentWillMount() {
    this.props.setChatHeader();
    if (this.props.params.chatId) {
      this._loadInitialData();
    }
  }

}

const swipeViewId = 'conversationSwipeView';
const mapStateToProps = (state, ownProps) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChat: (id) => dispatch(actions.chats.fetchChat(id)),
    fetchContact: (id) => dispatch(actions.contacts.fetchContact(id)),
    setSwipeViewIndex: (index) => dispatch(actions.swiper.setSwipeViewIndex(swipeViewId, index)),
    setChatHeader: () => dispatch(actions.header.setMode('CHAT'))
  };
};

const ConversationConnect = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationConnect;
