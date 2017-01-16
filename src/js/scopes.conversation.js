import React from 'react';

import Chat from './scopes.chat';
import Header from './scopes.header';

class Conversation extends React.Component {
  render() {
    return (
      <main className="s-conversation">
        <Header/>
        <Chat/>
      </main>
    );
  }

  // functions.
}

export default Conversation;
