import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Application from './scopes/scopes.application';
import Main from './scopes/scopes.main';
import Conversation from './scopes/scopes.conversation';
import Profile from './scopes/scopes.profile';
import config from './config'

export default () => {
  return (
    <Route path={ config.urlPrefix } component={ Application }>
      <IndexRoute component={ Main }/>
      <Route path="conversation/:chatId" component={ Conversation }/>
      <Route path="my-profile" component={ Profile }/>
    </Route>
  );
}