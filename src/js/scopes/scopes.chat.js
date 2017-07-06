import React from 'react';
import { connect } from 'react-redux';

import config from '../config'
import actions from '../actions';
import Messenger from '../components/components.messenger';
import BlockChat from './scopes.block-chat';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAttachment: false,
      messengerHeight: 50,
      limit: 20,
    };
  }

  componentWillUpdate() {
    this.shouldScrollBottom = (this.chatOutput.scrollTop + this.chatOutput.offsetHeight) === this.chatOutput.scrollHeight;
  }

  componentDidUpdate() {
    if(this.shouldScrollBottom) {
      console.log(this.chatOutput.scrollTop,this.chatOutput.scrollHeight)
      this.chatOutput.scrollTop = this.chatOutput.scrollHeight
    }
  }

  handleScroll(evt) {
    const elm = evt.target;
    if(elm.scrollTop < 90) {
      this.setState({
        limit: this.state.limit + 20
      })
    }
  }

  render() {
    const messages = this.props.chat && this.props.chat.messages ? this.props.chat.messages.slice(Math.max(this.props.chat.messages.length - this.state.limit, 1)).map(
      message => Object.assign({}, message, {user: this.props.contactsState.contacts[message.user]})
    ) : [];

    return (
      <section className="s-chat">
        <div ref={(elm) => this.chatOutput = elm} className="s-chat__output" onScroll={this.handleScroll.bind(this)}>
          {messages && this.props.meState.me && <BlockChat myId={this.props.meState.me.id} messages={ messages } />}
        </div>
        <div className="s-chat__input">
          <Messenger
            chatId={this.props.chat && this.props.chat.id}
            showAttachment={ this.state.showAttachment }
            messengerHeight= { this.state.messengerHeight }
            toggleAttachment={ this.toggleAttachment.bind(this) }
          />
        </div>
      </section>
    );
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
