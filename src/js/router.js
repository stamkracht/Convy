import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Application from './scopes.application';
import Main from './scopes.main';
import Conversation from './scopes.conversation';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Main}/>
      <Route path="conversation" component={Conversation}/>
    </Route>
  </Router>
);
