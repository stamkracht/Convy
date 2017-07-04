import React from 'react';
import { connect } from 'react-redux';

import config from '../config'
import actions from '../actions';
import { classNames } from '../utillities';

class Messenger extends React.Component {

  sendMessage(attachment) {
    const message = this.messageInput.value;
    this.props.sendMessage(this.props.chatId, message, attachment);
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

  addAttachment(event) {
    this.sendMessage(event.target.files[0]);
    this.props.toggleAttachment();
  }

  render() {
    let inputHeight = { height: `${ this.props.messengerHeight }px` };

    return (
      <article className="c-messenger" style={ inputHeight }>

        <input type='file' id='messageImage' accept='image/*'
          onChange={this.addAttachment.bind(this)} />
        <label htmlFor='messageImage' className={ classNames('c-messenger__attachment', {'state-active': this.props.showAttachment}) }>
          <i className="icon-add-circle-outline"></i>
        </label>

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
    sendMessage: (chatId, message, attachment) => dispatch(actions.chats.sendMessage(chatId, message, attachment)),
  };
};

const MessengerConnect = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerConnect;
