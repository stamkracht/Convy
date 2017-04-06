import React from 'react';
import { conditionalClass, humanReadableTimeStamp } from '../utillities';

class BlockChat extends React.Component {

  renderMessage(message) {
    if(message.user) {
      const cssClass = conditionalClass({
        'c-message': true,
        'c-message--user': message.user.id == this.props.myId, // Check if current user is author
      });

      return (
        <article key={message.created_at} className={ cssClass }>
          <h1 className="c-message__contact-name">{ message.user.firstName }</h1>
          <p>{ message.content }</p>
          <ul className="c-message__data">
            <li>{ humanReadableTimeStamp(message.created_at) }</li>
          </ul>
        </article>
      )
    }
  }

  render() {
    const messages = this.props.messages ?
      this.props.messages.map(m => this.renderMessage(m)) :
      (<h1>Empty</h1>);

    return (
      <section className="s-block-chat">
        { this.props.messages && <div className="s-block-chat__header">
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
