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
          <BlockChat myId={this.props.meState.me.id} messages={ messages }/>
        </div>

        <div className="s-chat__input">
          <Messenger
            chatId={this.props.chat && this.props.chat.id}
            messengerHeight={ this.state.messengerHeight }
            keyUpInteraction={ this.keyUpInteraction.bind(this) }
            showAttachment={ this.state.showAttachment }
            toggleAttachment={ this.toggleAttachment.bind(this) }
          />
        </div>
      </section>
    );
  }

  keyUpInteraction(event) {
    let self = this;
    event.persist();

    setTimeout(function(){
      self.setState({
        messengerHeight: 50,
      });

      console.info('input scroll-height: ', event.target.scrollHeight);
      let scrollHeight = event.target.scrollHeight;

      self.setState({
        messengerHeight: scrollHeight,
      });
    }, 0);
  }

  toggleAttachment() {
    this.setState({
      showAttachment: !this.state.showAttachment,
    });
  }

  componentDidMount() {
    if ( !!this.props.chat ) {
      this.props.updateLastSeen();
    }
  }
}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateLastSeen: () => dispatch(actions.chats.updateLastSeen(ownProps.chatId)),
  };
};

const ChatConnect = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatConnect;
