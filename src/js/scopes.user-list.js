import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import BlockUser from './components.block-user';

class UserList extends React.Component {
  render() {
    let users = renderUsers(this.props);

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
      dispatch(actions.openChat(id));
    },
  };
};

const UserListConnect = connect(null, mapDispatchToProps)(UserList);

export default UserListConnect;
