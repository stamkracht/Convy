import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import config from './config';
import Application from './scopes/scopes.application';
import Main from './scopes/scopes.main';
import Conversation from './scopes/scopes.conversation';
import Profile from './scopes/scopes.profile';


export default () => {
  return (
    <Route path={ config.urlPrefix } component={ Application }>
      <IndexRoute component={ Main }/>
      <Route path={ config.urlPrefix + "conversation(/:chatId)"} component={ Conversation }/>
      <Route path={ config.urlPrefix + "my-profile"} component={ Profile }/>
    </Route>
  );
}
