import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import BlockUser from '../components/components.block-user';
import SwipeView from '../scopes/scopes.swipe-view';
import { classNames } from '../utillities';

class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: false,
      limit: 20,
    };
  }

  onBottom(bottomOffset) {
    if(bottomOffset > -90) {
      this.setState({
        limit: this.state.limit + 20
      })
    }
  }


  render() {
    let users,
      input,
      loading;

    if (this.props.contactsState.isFetching) {
      loading = (
        <span className="c-loading">
          <span className="c-loading__circle"></span>
        </span>
      );
    }

    users = this.props.users.slice(0,this.state.limit).map((user, index) => (
      <BlockUser
        key={ index }
        id={ user.id}
        name={ user.firstName }
        description={ user.headline }
        image={ user.image }
        lastSeenAt={ user.lastSeenAt }
        onClick={ () => this.selectUser(user) }
      />
    ));

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
      <SwipeView className="s-user-list" onBottom={this.onBottom.bind(this)}>
        <div className={ classNames('s-user-list__inner', {'state-empty': !this.props.users.length}) }>
          { loading }

          <section className="s-block-actions">
            <nav className="s-block-actions__nav">
              <ul>
                <li>
                  <button onClick={ this.showSearch.bind(this) }>
                    <i className="icon-search"></i>
                  </button>
                </li>
              </ul>

              { input }
            </nav>
          </section>

          {!this.props.users.length && <p className="empty-message">{ this.props.emptyMessage }</p>}

          { users }
        </div>
      </SwipeView>
    );
  }

  selectUser(user) {
    this.props.fetchPrivateChat(user);
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
    browserHistory.push(`${config.urlPrefix}conversation`);
  }
}

UserList.propTypes = {
  openChat: React.PropTypes.func,
  users: React.PropTypes.array,
  searchResults: React.PropTypes.func,
};

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openChat: (id) => dispatch(actions.header.openChat(id)),
    swipeToContactPicker: () => dispatch(actions.swipeView.setSwipeViewIndex('conversationSwipeView', 1)),
    fetchPrivateChat: (user) => dispatch(actions.chats.fetchPrivateChat(user)),
  };
};

const UserListConnect = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListConnect;
