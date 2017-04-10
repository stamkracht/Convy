import React from 'react';
import { conditionalClass, humanReadableTimeStamp } from '../utillities';

class BlockChat extends React.Component {

  renderMessage(message) {
    if(message.user) {
      const messageClass = conditionalClass({
        'c-message': true,
        'c-message--user': message.user.id == this.props.myId, // Check if current user is author
      });

      return (
        <article key={message.created_at} className={ messageClass }>
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
    const blockChatClass = conditionalClass({
      's-block-chat': true,
      'state-empty': this.props.messages.length === 0 ? true : false,
    });

    const header = this.props.messages.length > 0 ?
      (<div className="s-block-chat__header">
         <p>Unread messages</p>
         <ul className="s-block-chat__data">
           <li>31 augustus</li>
         </ul>
       </div>) :
      (<div className="s-block-chat__header">
         <p>No messages, yet</p>
       </div>);

    const messages = this.props.messages.length > 0 ?
      this.props.messages.map(m => this.renderMessage(m)) :
      (<p className="empty-message">Be the first to start the conversation!</p>);

    return (
      <section className={ blockChatClass }>
        { header }

        <div className="s-block-chat__main">
          { messages }
        </div>
      </section>
    );
  }

  // functions.
}

export default BlockChat;
