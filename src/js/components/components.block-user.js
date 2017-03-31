import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class BlockUser extends React.Component {
  render() {
    return (
      <Link to={`conversation/${this.props.id}`} className="c-block-user" key={ this.props.id }>
        <span className="circle"></span>

        <ul className="c-block-user__data">
          { this.renderBlockUserData() }
        </ul>

        <div className="o-flag">
          <div className="c-block-user__image o-flag__img">
            <img src={ this.props.image } alt="User name" width="50" height="50"/>
          </div>

          <div className="c-block-user__content o-flag__body">
            <p className="c-block-user__title">{ this.props.name }</p>
            <p className="c-block-user__text">{ this.renderBlockUserText() }</p>
          </div>
        </div>
      </Link>
    );
  }

  renderBlockUserData() {
    let data = [];

    if (this.props.unreadMessagesCount) {
      data.push(<li key="counter" className="message-count">{this.props.unreadMessagesCount} new messages</li>);
    }

    if (this.props.lastMessage) {
      let today = moment(this.props.lastMessageAt).isSame(new Date(), 'd');
      let dateFormat = today ? 'HH:mm' : 'D-M-YYYY HH:mm';

      data.push(<li key="last-message">{ moment(this.props.lastMessageAt).format(dateFormat) }</li>);
    }

    else if (this.props.lastSeenAt) {
      let today = moment(this.props.lastSeenAt).isSame(new Date(), 'd');
      let dateFormat = today ? 'HH:mm' : 'D-M-YYYY';

      data.push(<li key="last-seen">last seen: { moment(this.props.lastSeenAt).format(dateFormat) }</li>);
    }

    return data;
  }

  renderBlockUserText() {
    let text;

    if (this.props.lastMessage) {
      text = this.props.lastMessage;
    }

    else if (this.props.description) {
      text = this.props.description;
    }

    return text;
  }
}

BlockUser.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  lastMessage: React.PropTypes.string,
  imageSource: React.PropTypes.string,
  lastSeenDate: React.PropTypes.string,
  lastMessageDate: React.PropTypes.string,
  unreadMessagesLength: React.PropTypes.number,
};

export default BlockUser;
