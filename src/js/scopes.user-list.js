import React from 'react';

import BlockUser from './components.block-user';

class UserList extends React.Component {
  render() {
    return (
      <section className="s-user-list">
        <article className="c-block-user"></article>
        <BlockUser/>
        <BlockUser/>
        <BlockUser/>
        <BlockUser/>
        <BlockUser/>
      </section>
    );
  }

  // functions.
}

export default UserList;
