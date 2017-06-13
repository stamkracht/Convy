import React from 'react';
import { connect } from 'react-redux';

import config from '../config'
import actions from '../actions';
import { classNames } from '../utillities';

class Messenger extends React.Component {

  sendMessage() {
    const message = this.messageInput.value;
    this.props.sendMessage(this.props.chatId, message);
    this.messageInput.value = '';
    this.props.onSizeChanged(50);
  }

  onKeyDown(event) {
    event.persist();

    // Send message on 'return' key press
    if ( event.keyCode === 13 && !event.shiftKey ) {
      event.preventDefault();
      this.sendMessage();
    } else {
      setTimeout(() => {
        this.props.onSizeChanged(50);
        let height = event.target.scrollHeight;
        this.props.onSizeChanged(height);
      }, 0);
    }
  }



  render() {
    let inputHeight = { height: `${ this.props.messengerHeight }px` };

    return (
      <article className="c-messenger" style={ inputHeight }>

        <button className={ classNames('c-messenger__attachment', {'state-active': this.props.showAttachment}) } onClick={ this.props.toggleAttachment }>
          <i className="icon-add-circle-outline"></i>
        </button>

        <textarea ref={ input => this.messageInput = input }
          style={ inputHeight }
          placeholder="Blah blah blah"
          onKeyDown={ this.onKeyDown.bind(this) }
        ></textarea>

        <button className="c-messenger__submit" onClick={ () => this.sendMessage() }>
          <i className="icon-send"></i>
        </button>
      </article>
    );
  }
}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: (chatId, message) => dispatch(actions.chats.sendMessage(chatId, message)),
  };
};

const MessengerConnect = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerConnect;
