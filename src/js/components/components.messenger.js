import React from 'react';
import { connect } from 'react-redux';

import config from '../config'
import actions from '../actions';
import { classNames } from '../utillities';

class Messenger extends React.Component {

  async sendMessage(attachment) {
    const message = this.messageInput.innerText;
    await this.props.sendMessage(this.props.chatId, message, attachment);
    this.messageInput.innerText = '';
    this.props.scrollDown();
  }

  onKeyDown(event) {
    event.persist();

    // Send message on 'return' key press
    if ( event.keyCode === 13 && !event.shiftKey ) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  addAttachment(event) {
    this.sendMessage(event.target.files[0]);
    this.props.toggleAttachment();
  }

  render() {
    return (
      <article className="c-messenger">

        <input className="u-hidden"
               id="messageImage"
               type="file"
               accept="image/*"
               onChange={ this.addAttachment.bind(this) }
        />
        <label htmlFor='messageImage' className={ classNames('c-messenger__attachment', {'state-active': this.props.showAttachment}) }>
          <i className="icon-add-circle-outline"></i>
        </label>

        <div ref={ input => this.messageInput = input }
             className="c-messenger__input"
             contentEditable="true"
             placeholder="Say something.."
             onKeyDown={ this.onKeyDown.bind(this) }
        ></div>

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
