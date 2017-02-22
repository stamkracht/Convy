import React from 'react';
import { connect } from 'react-redux';

import { openChat } from '../actions/actions';
import BlockUser from '../components/components.block-user';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
    };
  }

  render() {
    let listType,
        groupAction,
        users,
        userListInnerClass,
        emptyMessageContainer,
        input;

    listType = this.props.listType;

    if (listType === 'chats') {
      groupAction = <li>
                      <button onClick={ this.newGroupConversation.bind(this) }>
                        <i className="icon-group-add"></i>
                      </button>
                    </li>;
    }

    users = renderUsers(this.props);

    userListInnerClass = 's-user-list__inner';

    if (this.props.users.length < 1) {
      userListInnerClass = 's-user-list__inner state-empty';
      emptyMessageContainer = <p className="empty-message">{ this.props.emptyMessage }</p>;
    }

    if (this.state.search) {
      input = <div className="s-block-actions__input">
                <article className="c-input-group">
                  <button className="c-input-group__addon" onClick={ this.hideSearch.bind(this) }>
                    <i className="icon-close"></i>
                  </button>
                  <input className="c-input-group__field" type="text" placeholder={ this.props.searchPlaceholder }/>
                  <button className="c-input-group__addon submit"><i className="icon-search"></i></button>
                </article>
              </div>;
    }

    return (
      <section className="s-user-list">
        <div className={ userListInnerClass }>
          <section className="s-block-actions">
            <nav className="s-block-actions__nav">
              <ul>
                { groupAction }
                <li>
                  <button onClick={ this.showSearch.bind(this) }>
                    <i className="icon-search"></i>
                  </button>
                </li>
              </ul>

              { input }
            </nav>
          </section>

          { emptyMessageContainer }

          { users }
        </div>
      </section>
    );
  }

  showSearch() {
    console.info('Show search bar.');

    this.setState({
      search: true,
    });
  }

  hideSearch() {
    console.info('Hide search bar.');

    this.setState({
      search: false,
    });
  }

  newGroupConversation() {
    console.info('Start new group conversation.');
  }
}

UserList.propTypes = {
  openChat: React.PropTypes.func,
  users: React.PropTypes.array,
  listType: React.PropTypes.string,
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
