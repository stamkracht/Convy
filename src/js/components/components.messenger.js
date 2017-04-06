import React from 'react';
import config from '../config'

class Messenger extends React.Component {

  sendMessage() {
    const message = this.messageInput.value;
    config.adapter.sendMessage(this.props.chatId, message)
  }
  render() {
    let messengerAttachmentClass = `c-messenger__attachment ${ this.props.showAttachment ? 'state-active' : '' }`;

    let inputHeight = { height: `${ this.props.messengerHeight }px` };

    return (
      <article className="c-messenger" style={ inputHeight }>
        <button className={ messengerAttachmentClass } onClick={ this.props.toggleAttachment }>
          <i className="icon-add-circle-outline"></i>
        </button>

        <textarea ref={ input => this.messageInput = input }
          style={ inputHeight }
          placeholder="Share knowledge"
          onKeyUp={ this.props.keyUpInteraction }
        ></textarea>

        <button className="c-messenger__submit" onClick={ () => this.sendMessage() }>
          <i className="icon-send"></i>
        </button>
      </article>
    );
  }
}

export default Messenger;
