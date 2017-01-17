import React from 'react';

import Chat from './scopes.chat';
import Profile from './scopes.profile';

class Conversation extends React.Component {
  render() {
    return (
      <main className="s-conversation">
        <Chat/>
        <Profile/>
      </main>
    );
  }

  // functions.
}

export default Conversation;
