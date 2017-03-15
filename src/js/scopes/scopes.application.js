import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import Header from '../scopes/scopes.header';
import AppBackground from '../components/components.app-background';

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppBackground backgroundImage="dest/bg-app.jpg"/>
        <Header/>
        { this.props.meState.me && this.props.children }
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchMe();
    this.chatSubscribtion = actions.chats.subscribeToChats(this.props.updateChat);
  }

  componentWillUnmount() {
    this.chatSubscribtion.cancel();
  }

}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMe: () => dispatch(actions.me.fetchMe()),
    updateChat: (id, update) => dispatch(actions.chats.updateChat(id, update))
  };
};

const ApplicationConnect = connect(mapStateToProps, mapDispatchToProps)(Application);

export default ApplicationConnect;
