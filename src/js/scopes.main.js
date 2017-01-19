import React from 'react';

import UserList from './scopes.user-list';

class Main extends React.Component {
  render() {
    return (
      <main className="s-main">
        <UserList/>
        <UserList/>
      </main>
    );
  }

  // functions.
}

export default Main;
