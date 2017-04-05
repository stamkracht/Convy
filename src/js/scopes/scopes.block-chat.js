import React from 'react';
import { conditionalClass, humanReadableTimeStamp } from '../utillities';

class BlockChat extends React.Component {

  renderMessage(message) {
    const cssClass = conditionalClass({
      'c-message': true,
      'c-message--user': author, // Check if current user is author
    });

    return (
      <article className={ cssClass }>
        <h1 className="c-message__contact-name">{ message.author }</h1>
        <p>{ message.message }</p>
        <ul className="c-message__data">
          <li>{ humanReadableTimeStamp(message.timeStamp) }</li>
        </ul>
      </article>
    )
  }

  render() {
    let messages = (this.props.chat && this.props.chat.messages ?
      this.props.chat.messages.map(this.renderMessage) :
      (<h1>Empty</h1>))

    return (
      <section className="s-block-chat">
        { this.props.chat && this.props.chat.messages && <div className="s-block-chat__header">
          <p>Unread messages</p>
          <ul className="s-block-chat__data">
            <li>31 augustus</li>
          </ul>
        </div> }

        <div className="s-block-chat__main">
          {messages}
        </div>
      </section>
    );
  }

  // functions.
}

export default BlockChat;
