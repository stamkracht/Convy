import React from 'react';

import AppBackground from '../components/components.app-background';
import { connect } from 'react-redux';
import Header from '../scopes/scopes.header';
import actions from '../actions'
import Adapter from '../adapter'

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
    this.chatSubscribtion = actions.chats.subscribeToChats();
  }

  componentWillUnmount() {
    this.chatSubscribtion.cancel();
  }

}

const mapStateToProps = (state, ownProps) => state;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMe: () => dispatch(actions.me.fetchMe())
  };
};

const ApplicationConnect = connect(mapStateToProps, mapDispatchToProps)(Application);

export default ApplicationConnect;
