import React from 'react';

import AppBackground from '../components/components.app-background';
import Header from '../scopes/scopes.header';

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
