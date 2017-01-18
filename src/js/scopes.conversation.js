import React from 'react';

import Chat from './scopes.chat';
import Profile from './scopes.profile';
import Stats from './scopes.stats';

class Conversation extends React.Component {
  render() {
    return (
      <main className="s-conversation">
        <Chat/>
        <Profile/>
        <Stats/>
      </main>
    );
  }

  // functions.
}

export default Conversation;
