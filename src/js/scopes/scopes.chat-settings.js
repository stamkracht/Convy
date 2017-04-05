import React from 'react';

import { conditionalClass } from '../utillities';
import BlockUser from '../components/components.block-user';

class ChatSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
    };
  }

  render() {
    const chatSettings = conditionalClass({
      's-chat-settings': true,
      'state-new': !this.props.chat,
    });

    let groupName,
        participants,
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

    if (this.props.groupImage) {
      styles = { backgroundImage: `url(${ this.props.groupImage })` };
    } else {
      icon = <span className="c-banner__icon"><i className="icon-image"></i></span>;
    }

    if (this.state.search) {
      input = <div className="s-block-actions__input">
                <article className="c-input-group">
                  <button className="c-input-group__addon" onClick={ this.hideSearch.bind(this) }>
                    <i className="icon-close"></i>
                  </button>
                  <input className="c-input-group__field" type="text" placeholder="Add participants"/>
                  <button className="c-input-group__addon submit"><i className="icon-group-add"></i></button>
                </article>
              </div>;
    }

    return (
      <section className={ chatSettings }>
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
                  <button onClick={ this.addGroupImage.bind(this) }>
                    <i className="icon-image"></i>
                  </button>
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

          <article className="c-banner" style={ styles }>
            <h1 className="c-banner__title">{ groupName }</h1>
            { icon }
          </article>
          <h2 className="s-chat-settings__heading">{ heading }</h2>

          { participants }
        </div>
      </section>
    );
  }

  leaveGroup() {
    console.info('Leave group chat.');
  }

  editGroupName() {
    console.info('Edit group name.');
  }

  addGroupImage() {
    console.info('Add group image.');
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
}

ChatSettings.propTypes = {
  groupName: React.PropTypes.string,
  groupImage: React.PropTypes.string,
  participants: React.PropTypes.array,
};

function renderParticipants(props) {
  if (props.participants.length > 0) {
    return props.participants.map((user, index) => (
      <BlockUser
        key={ index }
        name={ user.firstName }
        description={ user.description }
        imageSource={ user.imageSource }
        lastSeenDate={ user.lastSeenDate }
        openChat={ () => props.openChat(user.id) }
      />
    ));
  }

  else { return []; }
}

export default ChatSettings;
