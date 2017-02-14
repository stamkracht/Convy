import React from 'react';

import AppBackground from '../components/components.app-background';
import Header from '../scopes/scopes.header';
import Main from '../scopes/scopes.main';
import Conversation from '../scopes/scopes.conversation';

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppBackground backgroundImage="dest/bg-app.jpg"/>
        <Header/>
        { this.props.children }
      </div>
    );
  }

  // functions.
}

export default Application;
