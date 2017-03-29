import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import Header from '../scopes/scopes.header';
import Entry from '../scopes/scopes.entry';
import AppBackground from '../components/components.app-background';


class Application extends React.Component {
  render() {
    let content, header;
    if(config.adapter.isAuthenticated()) {
      header = <Header/>;
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
    this.props.fetchMe();
    this.chatSubscribtion = actions.chats.subscribeToChats(this.props.updateChat);
    this.contactSubscribtion = actions.contacts.subscribeToContacts(this.props.updateContact);
  }

  componentWillUnmount() {
    this.chatSubscribtion.cancel();
    this.contactSubscribtion.cancel();
  }

}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMe: () => dispatch(actions.me.fetchMe()),
    updateChat: (id, update) => dispatch(actions.chats.updateChat(id, update)),
    updateContact: (id, update) => dispatch(actions.contacts.updateContact(id, update))
  };
};

const ApplicationConnect = connect(mapStateToProps, mapDispatchToProps)(Application);

export default ApplicationConnect;
