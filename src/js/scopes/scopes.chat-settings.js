import React from 'react';

import BlockUser from '../components/components.block-user';

class ChatSettings extends React.Component {
  render() {
    let groupName = this.props.groupName ? this.props.groupName : 'Group name';
    let participants = renderParticipants(this.props);
    let heading;
    let icon;
    let styles;

    if (this.props.participants.length === 0) {
      heading = 'Tap on the right icon above to start add participants.';
    } else {
      heading = 'Participants';
    }

    if (this.props.groupImage) {
      styles = { backgroundImage: `url(${ this.props.groupImage })` };
    } else {
      icon = <span className="c-banner__icon"><i className="icon-image"></i></span>;
    }

    return (
      <section className="s-chat-settings">
        <div className="s-chat-settings__inner">
          <article className="c-block-user"></article>

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
