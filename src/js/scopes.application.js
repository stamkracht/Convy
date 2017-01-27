import React from 'react';

import AppBackground from './components.app-background';
import Header from './scopes.header';
import Main from './scopes.main';
import Conversation from './scopes.conversation';

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppBackground/>
        <Header/>
        {this.props.children}
      </div>
    );
  }

  // functions.
}

export default Application;
