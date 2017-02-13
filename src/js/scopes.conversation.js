import React from 'react';

import SwipeView from './scopes.swipe-view';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import Stats from './scopes.stats';

class Conversation extends React.Component {
  render() {
    return (
      <main className="s-conversation">
        <SwipeView>
          <Chat/>
          <Profile/>
          <Stats/>
        </SwipeView>
      </main>
    );
  }

  // functions.
}

export default Conversation;
