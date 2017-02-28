class Adapter {
  constructor() {
    console.log('Adapter mock constructed');
    this.chatSubscribers = [];
    setInterval(() => {
      this.chatSubscribers.forEach((callback) => {
        callback(2, {
          lastMessageDate: new Date().toISOString(),
        })
      })
    }, 5000)
  }

  getMe() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(me);
      }, 2000)
    })
  }

  getChats() {
    return new Promise((resolve, reject) => {
      resolve(chats);
    })

  }

  getChat(id) {
    return new Promise((resolve, reject) => {
      resolve({
        status: 'success',
        chat: chats.chats.filter((chat) => chat.id == id)[0]
      })
    })

  }

  getContacts() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    })

  }

  subscribeToChats(callback) {
    this.chatSubscribers.push(callback);
    return {
      cancel: () => {
        const index = this.chatSubscribers.indexOf(callback)
        if(index != -1) {
          this.chatSubscribers.splice(index, 1)
        }
      }
    }
  }
  unsubscribeToChats(callback) {
    const index = this.chatSubscribers.indexOf(callback)
    if(index != -1) {
      this.chatSubscribers.splice(index,1)
    }
  }
}

export default Adapter;

const me = { status: 'success', user: {
  id: 30,
  firstname: 'Martha',
  lastname: 'Diaz',
  headline: 'Lead Developer @ Stamkracht',
  profileImage: 'https://profilepicture.jpg',
  email: 'example@example.org',
  phone: '0987654321',
  twitterHandle: 'everybodylovesmartha',
  location: {
    address: 'Oostenburgervoorstraat 72',
    zipcode: '1018 MR',
    city: 'Amsterdam',
    country: 'Nederland',
  }
}};

const chats = { status: 'success', chats: [
  {
    id: 1,
    firstName: 'Joshua',
    lastName: 'Torres',
    lastMessage: 'Nam porttitor blandit accu...',
    imageSource: 'http://placehold.it/50x50',
    lastMessageDate: '2017-02-28T17:37:53.227Z',
    unreadMessagesLength: 7,
  },
  {
    id: 2,
    firstName: 'Vincent',
    lastName: 'Gray',
    lastMessage: 'Accusamus, ducimus hic qui...',
    imageSource: 'http://placehold.it/50x50',
    lastMessageDate: '2017-02-28T17:37:53.227Z',
    unreadMessagesLength: 4,
  },
  {
    id: 3,
    firstName: 'Marthia',
    lastName: 'Diaz',
    lastMessage: 'Cupiditate sit laudantium ...',
    imageSource: 'http://placehold.it/50x50',
    lastMessageDate: '2017-02-28T17:37:53.227Z',
    unreadMessagesLength: 2,
  },
]};

const contacts = { status: 'success', contacts: [
  {
    id: 4,
    firstName: 'John',
    lastName: 'Doe',
    description: 'Frontend Developer',
    imageSource: 'http://placehold.it/50x50',
    lastSeenDate: '2017-02-28T17:37:53.227Z',
  },
  {
    id: 5,
    firstName: 'Paul',
    lastName: 'Graham',
    description: 'Interaction Designer',
    imageSource: 'http://placehold.it/50x50',
    lastSeenDate: '2017-02-28T17:37:53.227Z',
  },
  {
    id: 6,
    firstName: 'Shirley',
    lastName: 'Reid',
    description: 'Backend Developer',
    imageSource: 'http://placehold.it/50x50',
    lastSeenDate: '2017-02-28T17:37:53.227Z',
  },
]};

