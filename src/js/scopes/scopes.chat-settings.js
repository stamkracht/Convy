import React from 'react';
import { connect } from 'react-redux';

import config from '../config';
import actions from '../actions';
import { classNames } from '../utillities';
import BlockUser from '../components/components.block-user';

class ChatSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: false,
      query: '',
      selectedUsers: [],
    };
  }

  componentWillMount() {
    if (!this.props.contactsState.receivedAt) {
      this.props.fetchContacts();
    }
  }

  render() {
    let groupName,
        participants,
        container,
        heading,
        icon,
        styles,
        input;

    groupName = this.props.groupName ? this.props.groupName : 'Group name';

    participants = renderParticipants(this.props);

    if (this.props.participants.length === 0) {
      heading = 'Tap on the right icon above to start adding participants.';
    } else {
      heading = 'Participants';
    }

    if (!!this.props.groupImage) {
      styles = { backgroundImage: `url(${ this.props.groupImage })` };
    } else {
      icon = (
        <span className="c-banner__icon"><i className="icon-image"></i></span>
      );
    }

    if (!!this.state.search) {
      input = (
        <div className="s-block-actions__input">
          <article className="c-input-group">
            <button className="c-input-group__addon" onClick={ this.hideSearch.bind(this) }>
              <i className="icon-close"></i>
            </button>
            <input type="text"
              className="c-input-group__field"
              placeholder="Add participants"
              onKeyUp={ this.onKeyUp.bind(this) }
              ref={ input => this.participantsInput = input } />
            <button className="c-input-group__addon submit" onClick={ this.addParticipants.bind(this) }><i className="icon-group-add"></i></button>
          </article>
        </div>
      );

      container = (
        this.getContacts().map((user, index) => {
          return (
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
              isActive={ this.state.selectedUsers.indexOf(user) >= 0 }
              onClick={ () => this.toggleUserSelection(user) }
            />
          );
        })
      );
    } else {
      container = (
        <div>
          <article className="c-banner" style={ styles }>
            <h1 className="c-banner__title">{ groupName }</h1>
            { icon }
          </article>
          <h2 className="s-chat-settings__heading">{ heading }</h2>
          { participants }
        </div>
      );
    }

    return (
      <section className={ classNames('s-chat-settings', {'state-new': !this.props.chat}) }>
        <div className="s-chat-settings__inner">
          <section className="s-block-actions">
            <nav className="s-block-actions__nav">
              <ul>
                <li>
                  <button className="sign-out" onClick={ this.leaveGroup.bind(this) }>
                    <i className="icon-sign-out"></i>
                    <span>Leave group</span>
                  </button>
                </li>
                <li>
                  <button onClick={ this.editGroupName.bind(this) }>
                    <i className="icon-pencil"></i>
                  </button>
                </li>
                <li>
                  <input type='file' id='file' accept='image/*'
                    onChange={this.updateGroupImage.bind(this)} />
                  <label htmlFor='file'>
                    <i className="icon-image"></i>
                  </label>
                </li>
                <li>
                  <button onClick={ this.showSearch.bind(this) }>
                    <i className="icon-group-add"></i>
                  </button>
                </li>
              </ul>
              { input }
            </nav>
          </section>
          { container }
        </div>
      </section>
    );
  }

  onKeyUp() {
    this.setState({
      query: this.participantsInput.value,
    });
  }

  toggleUserSelection(user) {
    let selectedUsers = this.state.selectedUsers.slice();
    if ( selectedUsers.indexOf(user) >= 0 ) {
      selectedUsers.splice(selectedUsers.indexOf(user), 1);
    } else {
      selectedUsers.push(user);
    }
    this.setState({selectedUsers});
  }

  getContacts() {
    const contacts = this.props.contactsState.contacts;
    delete contacts[this.props.meState.me.id];
    return Object.keys(contacts).map((id) => contacts[id]).filter((contact) => {
      let fullName = `${contact.firstName} ${contact.lastName}`;
      return (this.state.selectedUsers.indexOf(contact) >= 0) ||
        (fullName.toLowerCase().indexOf(this.state.query.toLowerCase()) >= 0);
    });
  }

  addParticipants() {
    this.props.update({'participants': this.state.selectedUsers});
    this.hideSearch();
  }

  leaveGroup() {
    this.props.leave();
  }

  editGroupName() {
    this.props.update({'groupName': prompt('Group name')});
  }

  updateGroupImage(event) {
    this.props.update({'groupImage': event.target.files[0]});
  }

  showSearch() {
    this.setState({
      search: true,
    });
  }

  hideSearch() {
    this.setState({
      search: false,
      query: '',
    });
  }
}

ChatSettings.propTypes = {
  groupName: React.PropTypes.string,
  groupImage: React.PropTypes.string,
  participants: React.PropTypes.array,
  update: React.PropTypes.func,
  leave: React.PropTypes.func,
};

function renderParticipants(props) {
  if (props.participants.length > 0) {
    return props.participants.map(p => props.contactsState.contacts[p.id])
      .filter(x => x)
      .map((user, index) => (
      <BlockUser
        key={ index }
        name={ user.firstName }
        description={ user.description }
        imageSource={ user.imageSource }
        lastSeenDate={ user.lastSeenDate }
        openChat={ () => props.openChat(user.id) }
      />
    ));
  } else {
    return [];
  }
}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContacts: () => {
      dispatch(actions.contacts.fetchContacts());
    },
  };
};

const ChatSettingsConnect = connect(mapStateToProps, mapDispatchToProps)(ChatSettings);
export default ChatSettingsConnect;
