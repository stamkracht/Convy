import React from 'react';
import ReactDOM from 'react-dom';

import AppBackground from './components.app-background';
import Header from './scopes.header';
import Conversation from './scopes.conversation';

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppBackground/>
        <Header/>
        <Conversation/>
      </div>
    );
  }

  // functions.
}

ReactDOM.render(<Application/>, document.querySelector('.s-application'));

export default Application;
