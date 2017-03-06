import React from 'react';

import Messenger from '../components/components.messenger';
import BlockChat from './scopes.block-chat';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAttachment: false,
      messengerHeight: 50,
    };
  }

  render() {
    return (
      <section className="s-chat">
        <div className="s-chat__output">
          <BlockChat/>
        </div>

        <div className="s-chat__input">
          <Messenger
            messengerHeight={ this.state.messengerHeight }
            keyUpInteraction={ this.keyUpInteraction.bind(this) }
            showAttachment={ this.state.showAttachment }
            toggleAttachment={ this.toggleAttachment.bind(this) }
          />
        </div>
      </section>
    );
  }

  keyUpInteraction(e) {
    let self = this;
    e.persist();

    setTimeout(function(){
      self.setState({
        messengerHeight: 50,
      });

      console.info('input scroll-height: ', e.target.scrollHeight);
      let scrollHeight = e.target.scrollHeight;

      self.setState({
        messengerHeight: scrollHeight,
      });
    }, 0);
  }

  toggleAttachment() {
    this.setState({
      showAttachment: !this.state.showAttachment
    });
  }
}

export default Chat;
