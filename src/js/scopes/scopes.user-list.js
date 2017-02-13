import React from 'react';
import { connect } from 'react-redux';

import { openChat } from '../actions/actions';
import BlockUser from '../components/components.block-user';

class UserList extends React.Component {
  render() {
    let users = renderUsers(this.props);

    return (
      <section className="s-user-list">
        <div className="s-user-list__inner">
          <article className="c-block-user"></article>
          {users}
        </div>
      </section>
    );
  }
}

UserList.propTypes = {
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
