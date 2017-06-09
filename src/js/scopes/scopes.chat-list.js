import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import BlockUser from '../components/components.block-user';
import SwipeView from '../scopes/scopes.swipe-view';
import { classNames } from '../utillities';

class ChatList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: false,
    };
  }

  render() {
    let groupAction,
      chats,
      input,
      loading;

    if (this.props.chatsState.isFetching) {
      loading = (
        <span className="c-loading">
          <span className="c-loading__circle"></span>
        </span>
      );
    }

    groupAction = (
      <li>
        <button onClick={ this.newGroupConversation.bind(this) }>
          <i className="icon-group-add"></i>
        </button>
      </li>
    );

    chats = this.props.chats.map((chat, index) => {
      let name;
      let participants = chat.participants
        .filter(p => p.id !== this.props.meState.me.id)
        .map(p => this.props.contactsState.contacts[p.id])
        .filter(x => x);

      if (participants.length < 1) { name = this.props.meState.me.first_name; }
      else if (participants.length === 1) { name = participants[0].firstName }
      else { name = chat.groupName }

      return (
        <BlockUser
          key={ index }
          id={ chat.id}
          name={ name }
          lastMessage={ chat.lastMessage }
          image={ this.getImage(chat) }
          lastMessageDate={ chat.lastMessageDate }
          unreadMessagesCount={ chat.unreadCount }
          onClick={ () => this.open(chat) }
        />
      )
    });

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
        <section className="s-chat-list">
          <SwipeView className={ classNames('s-chat-list__inner', {'state-empty': !this.props.chats.length}) }>
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

            {!this.props.chats.length && <p className="empty-message">{ this.props.emptyMessage }</p>}

            { chats }
          </SwipeView>
        </section>
    );
  }

  getImage(chat) {
    if ( chat.isPrivate ) {
      let user = chat.participants.filter(
        p => p.id != this.props.meState.me.id
      )[0];
      if ( !user ) {
        return this.props.meState.me.image;
      }
      user = this.props.contactsState.contacts[user.id];
      if ( user ) {
        return user.image;
      }
    } else {
      return chat.image;
    }
  }

  open(chat) {
    browserHistory.push(`${config.urlPrefix}conversation/${chat.id}`);
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

ChatList.propTypes = {
  chats: React.PropTypes.array,
  searchResults: React.PropTypes.func,
};

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    swipeToContactPicker: () => dispatch(actions.swipeView.setSwipeViewIndex('conversationSwipeView', 1)),
  };
};

const ChatListConnect = connect(mapStateToProps, mapDispatchToProps)(ChatList);

export default ChatListConnect;
