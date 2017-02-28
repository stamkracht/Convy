import React from 'react';

import Messenger from '../components/components.messenger';
import BlockChat from './scopes.block-chat';

class Chat extends React.Component {
  render() {
    return (
      <section className="s-chat">
        <div className="s-chat__output">
          <BlockChat chat={this.props.chat}/>
        </div>

        <div className="s-chat__input">
          <Messenger/>
        </div>
      </section>
    );
  }

  // functions.
}

export default Chat;
