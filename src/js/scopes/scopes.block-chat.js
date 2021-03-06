import React from 'react';
import ReactDOM from 'react-dom';
import Linkify from 'react-linkify';

import { classNames, humanReadableTimeStamp } from '../utillities';


class BlockChat extends React.Component {

  handleImageLoad(evt) {
    evt.target.classList.remove('c-message__image--loading')
  }

  renderMessage(message) {
    if (message.user) {
      return (
        <article
          className={ classNames('c-message', {'c-message--user': message.user.id == this.props.myId}) }
          key={message.created_at}
          ref={(el) => { this.lastMessage = el; }}>
          <h1 className="c-message__contact-name">{ message.user.firstName }</h1>
          {message.attachment && <img onLoad={this.handleImageLoad.bind(this)} className="c-message__image c-message__image--loading" src={message.attachment} />}
          <Linkify properties={{target: '_blank', style: {textDecoration: 'underline'}}}><p>{ message.content }</p></Linkify>
          <ul className="c-message__data">
            <li>{ humanReadableTimeStamp(message.created_at) }</li>
          </ul>
        </article>
      )
    }
  }

  render() {
    const header = this.props.messages.length > 0 ?
      (<div className="s-block-chat__header">
         {/*
         <p>Unread messages</p>
         <ul className="s-block-chat__data">
           <li>31 augustus</li>
         </ul>
         */}
       </div>) :
      (<div className="s-block-chat__header">
         <p>No messages yet</p>
       </div>);

    const messages = this.props.messages.length > 0 ?
      this.props.messages.map(m => this.renderMessage(m)) :
      (<p className="empty-message">Be the first to start the conversation!</p>);

    return (
      <section className={ classNames('s-block-chat', {'state-empty': !this.props.messages.length}) }>
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
