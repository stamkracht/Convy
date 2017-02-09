import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Application from './scopes.application';
import Main from './scopes.main';
import Conversation from './scopes.conversation';
import Profile from './scopes.profile';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ Application }>
      <IndexRoute component={ Main }/>
      <Route path="conversation" component={ Conversation }/>
      <Route path="my-profile" component={ Profile }/>
    </Route>
  </Router>
);