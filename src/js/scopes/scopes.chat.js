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

    return (
      <section className="s-chat">
        <div className="s-chat__output" style={ chatOutputStyles }>
          <BlockChat/>
        </div>

        <div className="s-chat__input">
          <Messenger
            messengerHeight={ this.state.messengerHeight }
            keyUpInteraction={ this.keyUpInteraction.bind(this) }
            showAttachment={ this.state.showAttachment }
            toggleAttachment={ this.toggleAttachment.bind(this) }
          />
        </div>
      </section>
    );
  }

  keyUpInteraction(e) {
    let self = this;
    e.persist();

    setTimeout(function(){
      self.setState({
        messengerHeight: 50,
      });

      console.info('input scroll-height: ', e.target.scrollHeight);
      let scrollHeight = e.target.scrollHeight;

      self.setState({
        messengerHeight: scrollHeight,
      });
    }, 0);
  }

  toggleAttachment() {
    this.setState({
      showAttachment: !this.state.showAttachment
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
