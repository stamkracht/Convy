import React from 'react';

import SwipeView from './scopes.swipe-view';
import Chat from './scopes.chat';
import Profile from './scopes.profile';
import ChatSettings from './scopes.chat-settings';
import Stats from './scopes.stats';

class Conversation extends React.Component {
  render() {
    let view;
    let group = false;
    let groupNew = true;
    let groupName = 'We are TMNT';
    let groupImage = 'http://placehold.it/500x200';
    let participants = [];

    if (group) {
      view = <ChatSettings
        groupNew={ groupNew }
        groupName={ groupName }
        groupImage={ groupImage }
        participants={ participants }
      />
    } else {
      view = <Profile/>
    }

    return (
      <main className="s-conversation">
        <SwipeView>
          <Chat/>
          { view }
          <Stats/>
        </SwipeView>
      </main>
    );
  }

  // functions.
}

export default Conversation;
