import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import Header from '../scopes/scopes.header';
import Entry from '../scopes/scopes.entry';
import Conversation from '../scopes/scopes.conversation';
import AppBackground from '../components/components.app-background';

class Application extends React.Component {
  render() {
    let content, header;

    const routes = this.props.routes;
    const headerOptions = {
      isChat: routes[routes.length - 1].component === Conversation,
      chatId: this.props.params.chatId,
    };

    if(config.adapter.isAuthenticated()) {
      header = <Header options={ headerOptions } />;
      content = this.props.meState.me && this.props.children
    } else {
      content = <Entry/>
    }
    return (
      <div>
        <AppBackground backgroundImage="dest/bg-app.jpg"/>
        { header }
        { content }
      </div>
    );
  }

  componentDidMount() {
    if(config.adapter.isAuthenticated()) {
      this.props.setAuthenticated();
    }
  }

  componentWillReceiveProps(nextProps) {
    // Will be triggered when the redux state is changed
    const authenticated = nextProps.authState.authenticated;
    if(authenticated && (this.props.authState.authenticated != authenticated)) {
      this.props.fetchMe();
      this.chatEventSubscribtion = actions.chats.subscribeToChatEvents(this.props.handleChatEvent);
      this.contactEventSubscribtion = actions.contacts.subscribeToContactEvents(this.props.handleContactEvent);
    }
  }

  componentWillUnmount() {
    this.chatEventSubscribtion.cancel();
    this.contactEventSubscribtion.cancel();
  }

}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMe: () => dispatch(actions.me.fetchMe()),
    setAuthenticated: () => dispatch(actions.auth.receiveLogin()),
    handleChatEvent: (event, payload) => dispatch(actions.chats.handleChatEvent(event, payload)),
    handleContactEvent: (event, payload) => dispatch(actions.contacts.handleContactEvent(event, payload))
  };
};

const ApplicationConnect = connect(mapStateToProps, mapDispatchToProps)(Application);

export default ApplicationConnect;
