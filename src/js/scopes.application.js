import React from 'react';
import ReactDOM from 'react-dom';

import AppBackground from './components.app-background';
import Conversation from './scopes.conversation';

class Application extends React.Component {
  render() {
    return (
      <section>
        <AppBackground/>
        <Conversation/>
      </section>
    );
  }

  // functions.
}

ReactDOM.render(<Application/>, document.querySelector('.s-application'));

export default Application;
