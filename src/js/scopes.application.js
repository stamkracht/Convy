import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

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

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Main}/>
      <Route path="conversation" component={Conversation}/>
    </Route>
  </Router>,

  document.querySelector('.s-application')
);

export default Application;
