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

    if ( this.props.authState.isAuthenticated) {
      header = <Header options={ headerOptions } />;
      content = this.props.children
    } else {
      content = <Entry/>
    }
    return (
      <div>
        <AppBackground backgroundImage={ config.backgroundImage }/>
        { header }
        { content }
      </div>
    );
  }

  async componentWillMount() {
    const authenticated = await config.adapter.isAuthenticated()
    if (authenticated) {
      this.props.setAuthenticated();
    }
  }

  componentWillReceiveProps(nextProps) {
    // Will be triggered when the redux state is changed
    const authenticated = nextProps.authState.isAuthenticated;
    if(authenticated && (this.props.authState.isAuthenticated != authenticated)) {
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
