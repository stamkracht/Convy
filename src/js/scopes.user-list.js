import React from 'react';
import { connect } from 'react-redux';

import { openChat } from './actions';
import BlockUser from './components.block-user';

class UserList extends React.Component {
  render() {
    let users = renderUsers(this.props);
    let styles = {
      left: `${ this.props.initialPosition }vw`,
      transform: `translate(${ -this.props.position }vw, 0)`
    };

    if (this.props.animEnabled) {
      styles.transition = 'transform 0.5s cubic-bezier(0.25, 0.5, 0.5, 1)';
    }

    return (
      <section
        className="s-user-list"
        onTouchStart={ this.props.startSlide }
        onTouchMove={ this.props.moveSlide }
        onTouchEnd={ this.props.endSlide }
        style={ styles }
      >
        <article className="c-block-user"></article>
        {users}
      </section>
    );
  }
}

UserList.propTypes = {
  initialPosition: React.PropTypes.number,
  position: React.PropTypes.number,
  animEnabled: React.PropTypes.bool,
  startSlide: React.PropTypes.func,
  moveSlide: React.PropTypes.func,
  endSlide: React.PropTypes.func,
  openChat: React.PropTypes.func,
  users: React.PropTypes.array,
};

function renderUsers(props) {
  if (props.users.length > 0) {
    return props.users.map((user, index) => (
      <BlockUser
        key={ index }
        name={ user.firstName }
        description={ user.description }
        lastMessage={ user.lastMessage }
        imageSource={ user.imageSource }
        lastSeenDate={ user.lastSeenDate }
        lastMessageDate={ user.lastMessageDate }
        unreadMessagesLength={ user.unreadMessagesLength }
        openChat={ () => props.openChat(user.id) }
      />
    ));
  }

  else { return []; }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openChat: (id) => {
      dispatch(openChat(id));
    },
  };
};

const UserListConnect = connect(null, mapDispatchToProps)(UserList);

export default UserListConnect;
