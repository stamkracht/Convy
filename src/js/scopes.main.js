import React from 'react';

import UserList from './scopes.user-list';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
    };
  }

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
        <div className="s-main__inner">
          <UserList
            users={ chats }
            animEnabled={ this.state.animEnabled }
            initialPosition={ 0 }
            position={ this.state.offset }
            startSlide={ this.startSlide.bind(this) }
            moveSlide={ this.moveSlide.bind(this) }
            endSlide={ this.endSlide.bind(this) }
          />
          <UserList
            users={ contacts }
            animEnabled={ this.state.animEnabled }
            initialPosition={ -100 }
            position={ this.state.offset - 100 }
            startSlide={ this.startSlide.bind(this) }
            moveSlide={ this.moveSlide.bind(this) }
            endSlide={ this.endSlide.bind(this) }
          />
        </div>
      </main>
    );
  }

  startSlide(event) {
    console.info('Start swiping.');

    this.setState({
      animEnabled: false,
      clientX: event.nativeEvent.touches[0].clientX,
    });
  }

  moveSlide(event) {
    const oldClientX = this.state.clientX;
    const newClientX = event.nativeEvent.touches[0].clientX;
    const difference = newClientX - oldClientX;
    const acceleration = 0.3;
    const speed = 0.1;

    // acceleration, is the rate of change of the speed of something in a given direction (velocity).
    // speed is the rate of motion, or the rate of change of position, it is a scalar quantity.
    let offset = this.state.offset - (Math.pow(Math.abs(difference), acceleration) * (difference * speed));

    if (offset < 0) { offset = 0; }

    else if (offset > 100) { offset = 100; }

    this.setState({
      offset: offset,
      clientX: newClientX,
    });
  }

  endSlide(event) {
    this.setState({
      animEnabled: true,
    });

    if (this.state.offset > 50) {
      console.info('Offset is greater than 50.');

      this.setState({
        offset: 100,
      });
    }

    else {
      console.info('Offset is less than 50');

      this.setState({
        offset: 0,
      });
    }
  }
}

export default Main;
