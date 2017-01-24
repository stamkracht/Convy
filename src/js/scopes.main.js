import React from 'react';

import UserList from './scopes.user-list';

class Main extends React.Component {
  render() {
    let chats = [
      {
        id: 1,
        firstName: 'Joshua',
        lastName: 'Torres',
        lastMessage: 'Nam porttitor blandit accu...',
        imageSource: 'http://placehold.it/50x50',
        lastMessageDate: '17:03',
        unreadMessagesLength: 7,
      },
      {
        id: 2,
        firstName: 'Vincent',
        lastName: 'Gray',
        lastMessage: 'Accusamus, ducimus hic qui...',
        imageSource: 'http://placehold.it/50x50',
        lastMessageDate: '17:03',
        unreadMessagesLength: 4,
      },
      {
        id: 3,
        firstName: 'Marthia',
        lastName: 'Diaz',
        lastMessage: 'Cupiditate sit laudantium ...',
        imageSource: 'http://placehold.it/50x50',
        lastMessageDate: '17:03',
        unreadMessagesLength: 2,
      },
    ];

    let contacts = [
      {
        id: 4,
        firstName: 'John',
        lastName: 'Doe',
        description: 'Frontend Developer',
        imageSource: 'http://placehold.it/50x50',
        lastSeenDate: '17:03',
      },
      {
        id: 5,
        firstName: 'Paul',
        lastName: 'Graham',
        description: 'Interaction Designer',
        imageSource: 'http://placehold.it/50x50',
        lastSeenDate: '17:03',
      },
      {
        id: 6,
        firstName: 'Shirley',
        lastName: 'Reid',
        description: 'Backend Developer',
        imageSource: 'http://placehold.it/50x50',
        lastSeenDate: '17:03',
      },
    ];

    return (
      <main className="s-main">
        <UserList users={chats} idName="chat-list"/>
        <UserList users={contacts} idName="contact-list"/>
      </main>
    );
  }

  // functions.
}

export default Main;
