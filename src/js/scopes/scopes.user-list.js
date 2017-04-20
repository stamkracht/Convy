import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import BlockUser from '../components/components.block-user';

class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: false,
    };
  }

  render() {
    const chatFetching = this.props.listType == 'chats' && this.props.chatsState.isFetching,
          contactsFetching = this.props.listType == 'contacts' && this.props.contactsState.isFetching;

    let listType,
        groupAction,
        users,
        userListInnerClass,
        emptyMessageContainer,
        input,
        loading;

    listType = this.props.listType;

    if (chatFetching || contactsFetching) {
      loading = (
        <span className="c-loading">
          <span className="c-loading__circle"></span>
        </span>
      );
    }

    if (listType === 'chats') {
      groupAction = (
        <li>
          <button onClick={ this.newGroupConversation.bind(this) }>
            <i className="icon-group-add"></i>
          </button>
        </li>
      );
    }

    users = this.props.users.map((user, index) => (
      <BlockUser
        key={ index }
        id={ user.id}
        name={ user.firstName }
        description={ user.description }
        lastMessage={ user.lastMessage }
        image={ user.image }
        lastSeenAt={ user.lastSeenAt }
        lastMessageAt={ user.lastMessageAt }
        unreadMessagesCount={ user.unreadMessagesCount }
      />
    ));

    userListInnerClass = 's-user-list__inner';

    if (this.props.users.length < 1) {
      userListInnerClass = 's-user-list__inner state-empty';
      emptyMessageContainer = <p className="empty-message">{ this.props.emptyMessage }</p>;
    }

    if (this.state.search) {
      input = (
        <div className="s-block-actions__input">
          <article className="c-input-group">
            <button className="c-input-group__addon" onClick={ this.hideSearch.bind(this) }>
              <i className="icon-close"></i>
            </button>
            <input
              className="c-input-group__field"
              type="text"
              placeholder={ this.props.searchPlaceholder }
              autoFocus
              onKeyDown={ this.keyDownSearchInteraction.bind(this) }
              onKeyUp={ this.keyUpSearchInteraction.bind(this) }
            />
            <button className="c-input-group__addon submit"><i className="icon-search"></i></button>
          </article>
        </div>
      );
    }

    return (
      <section className="s-user-list">
        <div className={ userListInnerClass }>
          { loading }

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

  keyDownSearchInteraction(e) {
    let value = e.target.value,
        keyCode = e.keyCode;

    // if input is empty and user presses backspace or esc, hide search.
    if (value === '' && keyCode === 8 || keyCode === 27) {
      this.hideSearch();
    }
  }

  keyUpSearchInteraction() {
    this.props.searchResults();
  }

  newGroupConversation() {
    this.props.swipeToContactPicker();
    browserHistory.push('/conversation');
  }
}

UserList.propTypes = {
  openChat: React.PropTypes.func,
  users: React.PropTypes.array,
  listType: React.PropTypes.string,
  searchResults: React.PropTypes.func,
};

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openChat: (id) => {
      dispatch(actions.header.openChat(id));
    },
    swipeToContactPicker: () => dispatch(actions.swipeView.setSwipeViewIndex('conversationSwipeView', 1)),
  };
};

const UserListConnect = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListConnect;
