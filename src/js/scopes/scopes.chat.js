import React from 'react';

import Messenger from '../components/components.messenger';
import BlockChat from './scopes.block-chat';
import { connect } from 'react-redux';
import actions from '../actions';
import config from '../config'

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAttachment: false,
      messengerHeight: 50,
    };
  }

  render() {
    let chatOutputStyles = { height: `calc(100vh - ${ this.state.messengerHeight + 20 }px` };

    const messages = this.props.chat && this.props.chat.messages ? this.props.chat.messages.map(
      message => Object.assign({}, message, {user: this.props.contactsState.contacts[message.user]})
    ) : [];

    return (
      <section className="s-chat">
        <div className="s-chat__output" style={ chatOutputStyles }>
          <BlockChat myId={this.props.meState.me.id} messages={ messages } />
        </div>
        <div className="s-chat__input">
          <Messenger
            chatId={this.props.chat && this.props.chat.id}
            showAttachment={ this.state.showAttachment }
            messengerHeight= { this.state.messengerHeight }
            onSizeChanged= { (size) => this.onSizeChanged(size) }
            toggleAttachment={ this.toggleAttachment.bind(this) }
          />
        </div>
      </section>
    );
  }

  onSizeChanged(size) {
    this.setState({
      messengerHeight: size,
    });
  }

  toggleAttachment() {
    this.setState({
      showAttachment: !this.state.showAttachment,
    });
  }

  componentDidMount() {
    if ( !!this.props.chat ) {
      this.props.updateLastSeen(this.props.chat.id);
    }
  }
}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateLastSeen: (id) => dispatch(actions.chats.updateLastSeen(id)),
  };
};

const ChatConnect = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatConnect;
