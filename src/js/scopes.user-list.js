import React from 'react';

import BlockUser from './components.block-user';

class UserList extends React.Component {
  render() {
    let users = renderUsers(this.props.users);

    return (
      <section className="s-user-list" id={ this.props.idName }>
        <article className="c-block-user"></article>
        {users}
      </section>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.array,
};

function renderUsers(users) {
  if (users.length > 0) {
    return users.map((user, index) => (
      <BlockUser
        id={ user.id }
        name={ user.firstName }
        description={ user.description }
        lastMessage={ user.lastMessage }
        imageSource={ user.imageSource }
        lastSeenDate={ user.lastSeenDate }
        lastMessageDate={ user.lastMessageDate }
        unreadMessagesLength={ user.unreadMessagesLength }
      />
    ));
  }

  else { return []; }
}

export default UserList;
