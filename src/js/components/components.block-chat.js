import React from 'react';
import { Link } from 'react-router';

import { classNames, humanReadableTimeStamp } from '../utillities'

class BlockChat extends React.Component {

  render() {
    return (
      <Link
        className={ classNames('c-block-chat', {'state-active': this.props.isActive}) }
        key={ this.props.id }
        onClick={ this.props.onClick }>

        <span className="circle"></span>

        <ul className="c-block-chat__data">
          { this.renderBlockChatData() }
        </ul>

        <div className="o-flag">
          <div className="c-block-chat__image o-flag__img">
            <img src={ this.props.image } alt={ this.props.title } width="50" height="50"/>
          </div>

          <div className="c-block-chat__content o-flag__body">
            <p className="c-block-chat__title">{ this.props.title }</p>
            <p className="c-block-chat__text">{ this.renderBlockChatText() }</p>
          </div>
        </div>
      </Link>
    );
  }

  renderBlockChatData() {
    let data = [];

    if (this.props.unreadMessagesCount) {
      data.push(<li key="counter" className="message-count">{this.props.unreadMessagesCount} new messages</li>);
    }

    if (this.props.lastMessage) {
      data.push(<li key="last-message">{ humanReadableTimeStamp(this.props.lastMessageAt) }</li>);
    }

    else if (this.props.lastMessageDate) {
      data.push(<li key="last-seen">last seen: { humanReadableTimeStamp(this.props.lastMessageDate) }</li>);
    }

    return data;
  }

  renderBlockChatText() {
    return this.props.lastMessage;
  }
}

BlockChat.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string,
  image: React.PropTypes.string,
  unreadCount: React.PropTypes.number,
  lastMessage: React.PropTypes.string,
  lastMessageDate: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

BlockChat.defaultProps = {
  isActive: false,
  onClick: () => {},
};

export default BlockChat;
